'use client';

import { useReducer } from 'react';

import NoticeList from '@/app/[locale]/community/notice/NoticeList';

import LoginVisible from '@/components/common/LoginVisible';
import Pagination from '@/components/common/Pagination';
import SearchBox from '@/components/common/search/SearchBox';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NOTICE_TAGS } from '@/constants/tag';

import { NoticePreviewList } from '@/types/notice';

import { useCustomSearchParams } from '@/utils/hooks/useCustomSearchParams';
import useResponsive from '@/utils/hooks/useResponsive';

import AdminFeatures from './AdminFeatures';

const POST_LIMIT = 20; // TODO: 모바일 크기에서는 10으로 축소

type ReducerAction =
  | {
      type: 'ADD' | 'DELETE';
      id: number;
    }
  | {
      type: 'RESET';
    };

const reducer = (state: Set<number>, action: ReducerAction) => {
  switch (action.type) {
    case 'ADD':
      return new Set<number>(state.add(action.id));
    case 'DELETE':
      state.delete(action.id);
      return new Set<number>(state);
    case 'RESET':
      return new Set<number>();
    default:
      throw new Error('undefined action');
  }
};

export default function NoticePageContent({
  data: { searchList: posts, total: totalPostsCount },
}: {
  data: NoticePreviewList;
}) {
  const { page, keyword, tags, setSearchParams } = useCustomSearchParams();
  const { screenType } = useResponsive();
  const [selectedPostIds, changeSelectedIds] = useReducer(reducer, new Set<number>());
  const [isEditMode, toggleEditMode] = useReducer((editMode) => {
    changeSelectedIds({ type: 'RESET' });
    return !editMode;
  }, false);

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', pageNum });
  };

  // edit mode에서 페이지 나가려고 할 때 경고 띄워주기: 변경사항이 저장되지 않았습니다. 정말 나가시겠습니까?

  return (
    <PageLayout titleType="big" bodyStyle={{ paddingTop: 54 }}>
      <SearchBox
        tags={NOTICE_TAGS}
        initTags={tags}
        initKeyword={keyword ?? ''}
        disabled={isEditMode}
        setSearchParams={setSearchParams}
      />
      <NoticeList
        posts={posts}
        isEditMode={isEditMode}
        selectedPostIds={selectedPostIds}
        changeSelectedIds={changeSelectedIds}
      />
      <Pagination
        totalPostsCount={totalPostsCount}
        postsCountPerPage={POST_LIMIT}
        pageLimit={screenType == 'desktop' ? 10 : 5}
        currentPage={page}
        setCurrentPage={setCurrentPage}
        disabled={isEditMode}
      />
      <LoginVisible staff>
        <AdminFeatures
          isEditMode={isEditMode}
          toggleEditMode={toggleEditMode}
          selectedPostIds={selectedPostIds}
          resetSelectedPosts={() => {
            changeSelectedIds({ type: 'RESET' });
          }}
        />
      </LoginVisible>
    </PageLayout>
  );
}
