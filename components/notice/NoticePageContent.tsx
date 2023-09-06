'use client';

import { useState } from 'react';

import Pagination from '@/components/common/Pagination';
import SearchForm from '@/components/common/search/SearchForm';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import NoticeList from '@/components/notice/NoticeList';

import { NoticeTags } from '@/constants/tag';

import { useCustomSearchParams } from '@/hooks/useCustomSearchParams';

import { GETNoticePostsResponse } from '@/types/post';

import AdminFeatures from './AdminFeatures';

const POST_LIMIT = 20;

export default function NoticePageContent({
  data: { searchList: posts, total: totalPostsCount },
}: {
  data: GETNoticePostsResponse;
}) {
  const { page, keyword, tags, setSearchParams } = useCustomSearchParams();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [selectedPostIds, setSelectedPostIds] = useState<Set<number>>(new Set());

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', page: pageNum });
  };

  const resetSelectedPosts = () => {
    setSelectedPostIds(new Set());
  };

  // edit mode에서 페이지 나가려고 할 때 경고 띄워주기: 변경사항이 저장되지 않았습니다. 정말 나가시겠습니까?

  return (
    <PageLayout titleType="big" titleMargin="mb-6">
      <SearchForm
        tags={NoticeTags}
        initTags={tags}
        initKeyword={keyword ?? ''}
        disabled={isEditMode}
        setSearchParams={setSearchParams}
      />
      <NoticeList
        posts={posts}
        isEditMode={isEditMode}
        selectedPostIds={selectedPostIds}
        setSelectedPostIds={setSelectedPostIds}
      />
      <Pagination
        totalPostsCount={totalPostsCount}
        postsCountPerPage={POST_LIMIT}
        currentPage={page}
        setCurrentPage={setCurrentPage}
        disabled={isEditMode}
      />
      <AdminFeatures
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        selectedPostIds={selectedPostIds}
        resetSelectedPosts={resetSelectedPosts}
      />
    </PageLayout>
  );
}
