'use client';

import { SetStateAction, useState } from 'react';
import useSwr from 'swr';

import { getNoticePosts, getNoticePostsMock } from '@/apis/notice';

import Pagination from '@/components/common/Pagination';
import SearchForm from '@/components/common/search/SearchForm';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import BatchEditButtons from '@/components/notice/BatchEditButtons';
import { CreateButton, EditButton } from '@/components/notice/NoticeButtons';
import NoticeList from '@/components/notice/NoticeList';

import { NoticeTags } from '@/constants/tag';

import { useCustomSearchParams } from '@/hooks/useCustomSearchParams';

import { notice } from '@/types/page';
import { GETNoticePostsResponse } from '@/types/post';

import { getPath } from '@/utils/page';

const POST_LIMIT = 20;
const noticePath = getPath(notice);

export default function NoticePage() {
  const { page, keyword, tags, setSearchParams } = useCustomSearchParams();
  const {
    data: { searchList: posts = [], total: totalPostsCount = 0 } = {},
    isLoading, // TODO: 로딩 컴포넌트
    error, // TODO: 에러 컴포넌트?
  } = useSwr<GETNoticePostsResponse>(
    { url: '/notice', params: { page, keyword, tag: tags } },
    getNoticePostsMock,
  ); // 추후 fetcher 삭제
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [selectedPosts, setSelectedPosts] = useState<number[]>([]);

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', page: pageNum });
  };

  const batchDelete = () => {};

  const batchPin = () => {};

  return (
    <PageLayout titleType="big">
      <SearchForm
        tags={NoticeTags}
        initTags={tags}
        initKeyword={keyword ?? ''}
        isDisabled={isEditMode}
        setSearchParams={setSearchParams}
      />
      <NoticeList posts={posts} isEditMode={isEditMode} />
      <Pagination
        totalPostsCount={totalPostsCount}
        postsCountPerPage={POST_LIMIT}
        currentPage={page}
        setCurrentPage={setCurrentPage}
      />
      <div className="flex mt-12 mx-2.5">
        {isEditMode && (
          <BatchEditButtons
            selectedPostCount={0}
            onClickBatchDelete={batchDelete}
            onClickBatchPin={batchPin}
          />
        )}
        <div className="ml-auto">
          <EditButton isEditMode={isEditMode} toggleEditMode={() => setIsEditMode(!isEditMode)} />
          <CreateButton mainPath={noticePath} isDisabled={isEditMode} />
        </div>
      </div>
    </PageLayout>
  );
}
