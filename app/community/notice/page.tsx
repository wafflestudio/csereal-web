'use client';

import { useState } from 'react';
import useSwr from 'swr';

import { deleteNotice, getNoticePosts, patchNotice } from '@/apis/notice';

import Pagination from '@/components/common/Pagination';
import SearchForm from '@/components/common/search/SearchForm';
import { ErrorFallback, LoadingFallback } from '@/components/layout/Boundary';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import AlertModal from '@/components/modal/AlertModal';
import { BatchButton, CreateButton, EditButton } from '@/components/notice/NoticeButtons';
import NoticeList from '@/components/notice/NoticeList';

import { NoticeTags } from '@/constants/tag';

import { useCustomSearchParams } from '@/hooks/useCustomSearchParams';
import useModal from '@/hooks/useModal';

import { notice } from '@/types/page';
import { GETNoticePostsResponse, NoticePost } from '@/types/post';

import { getPath } from '@/utils/page';

const POST_LIMIT = 20;
const noticePath = getPath(notice);

export default function NoticePage() {
  const { page, keyword, tags, setSearchParams } = useCustomSearchParams();
  const {
    data: { searchList: posts = [], total: totalPostsCount = 0 } = {},
    mutate,
    error,
    isLoading,
  } = useSwr<GETNoticePostsResponse>(
    { url: '/notice', params: { page, keyword, tag: tags } },
    getNoticePosts,
  ); // 추후 fetcher 삭제
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [selectedPostIds, setSelectedPostIds] = useState<Set<number>>(new Set());
  const { openModal, closeModal } = useModal();

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', page: pageNum });
  };

  const resetSelectedPosts = () => {
    setSelectedPostIds(new Set());
  };

  const toggleEditMode = () => {
    resetSelectedPosts();
    setIsEditMode(!isEditMode);
  };

  const batchDelete = async () => {
    for (const id of Array.from(selectedPostIds)) {
      // CORS 에러 해결되면 주석 해제
      // await deleteNotice(id);
    }
    // await mutate();
    resetSelectedPosts();
  };

  const batchUnpin = async () => {
    for (const id of Array.from(selectedPostIds)) {
      const unpinnedPost: Partial<NoticePost> = {
        isPinned: false,
      };
      // CORS 에러 해결되면 주석 해제
      // await patchNotice(id, unpinnedPost);
      for (const p of posts) {
        if (p.id === id) p.isPinned = false;
      }
    }
    // await mutate();
    resetSelectedPosts();
    closeModal();
  };

  if (error) {
    return (
      <PageLayout titleType="big" titleMargin="mb-6">
        <SearchForm
          tags={NoticeTags}
          initTags={tags}
          initKeyword={keyword ?? ''}
          disabled={isEditMode}
          setSearchParams={setSearchParams}
        />
        <ErrorFallback error={error} />
      </PageLayout>
    );
  }

  if (isLoading) {
    return (
      <PageLayout titleType="big" titleMargin="mb-6">
        <SearchForm
          tags={NoticeTags}
          initTags={tags}
          initKeyword={keyword ?? ''}
          disabled={isEditMode}
          setSearchParams={setSearchParams}
        />
        <LoadingFallback />
      </PageLayout>
    );
  }

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
      <div className="flex mt-12 mx-2.5">
        {isEditMode && (
          <div className="flex items-center gap-3">
            <SelectedCountStatus count={selectedPostIds.size} />
            <BatchButton
              disabled={selectedPostIds.size === 0}
              onClick={() =>
                openModal(
                  <AlertModal
                    message="선택한 게시글을 모두 삭제하시겠습니까?"
                    confirmText="삭제"
                    onConfirm={batchDelete}
                    onClose={closeModal}
                  />,
                )
              }
            >
              일괄 삭제
            </BatchButton>
            <BatchButton
              disabled={selectedPostIds.size === 0}
              onClick={() =>
                openModal(
                  <AlertModal
                    message="선택한 게시글을 모두 고정 해제하시겠습니까?"
                    confirmText="고정 해제"
                    onConfirm={batchUnpin}
                    onClose={closeModal}
                  />,
                )
              }
            >
              일괄 고정 해제
            </BatchButton>
          </div>
        )}
        <div className="ml-auto">
          <EditButton isEditMode={isEditMode} toggleEditMode={toggleEditMode} />
          <CreateButton mainPath={noticePath} disabled={isEditMode} />
        </div>
      </div>
    </PageLayout>
  );
}

function SelectedCountStatus({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1 mr-3">
      <span className="material-symbols-rounded text-neutral-500 text-lg font-extralight">
        check_box
      </span>
      <span className="text-neutral-500 text-xs tracking-wide">{count}개 게시물 선택</span>
    </div>
  );
}
