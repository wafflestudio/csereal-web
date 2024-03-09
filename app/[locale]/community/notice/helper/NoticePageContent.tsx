'use client';

import NoticeList from '@/app/[locale]/community/notice/helper/NoticeList';

import LoginVisible from '@/components/common/LoginVisible';
import Pagination from '@/components/common/Pagination';
import SearchBox from '@/components/common/search/SearchBox';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NOTICE_TAGS } from '@/constants/tag';

import { NoticePreviewList } from '@/types/notice';

import { useCustomSearchParams } from '@/utils/hooks/useCustomSearchParams';
import useResponsive from '@/utils/hooks/useResponsive';

import AdminFeatures from './AdminFeatures';
import { usePostSelect } from './usePostSelect';

const POST_LIMIT = 20; // TODO: 모바일 크기에서는 10으로 축소

// TODO: edit mode에서 페이지 나가려고 할 때 경고 띄워주기: 변경사항이 저장되지 않았습니다. 정말 나가시겠습니까?
export default function NoticePageContent({
  data: { searchList: posts, total: totalPostsCount },
}: {
  data: NoticePreviewList;
}) {
  const { page, keyword = '', tags, setSearchParams } = useCustomSearchParams();
  const { selectedIds, dispatchIds, editMode, toggleEditMode } = usePostSelect();

  const { screenType } = useResponsive();
  const pageLimit = screenType == 'desktop' ? 10 : 5;

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', pageNum });
  };

  return (
    <PageLayout titleType="big" bodyStyle={{ paddingTop: 54 }}>
      <SearchBox
        tags={NOTICE_TAGS}
        initTags={tags}
        initKeyword={keyword}
        disabled={editMode}
        setSearchParams={setSearchParams}
      />
      <NoticeList
        posts={posts}
        isEditMode={editMode}
        selectedIds={selectedIds}
        dispatchIds={dispatchIds}
      />
      <Pagination
        totalPostsCount={totalPostsCount}
        postsCountPerPage={POST_LIMIT}
        pageLimit={pageLimit}
        currentPage={page}
        setCurrentPage={setCurrentPage}
        disabled={editMode}
      />

      <LoginVisible staff>
        <AdminFeatures
          isEditMode={editMode}
          toggleEditMode={toggleEditMode}
          selectedIds={selectedIds}
          dispatchIds={dispatchIds}
        />
      </LoginVisible>
    </PageLayout>
  );
}
