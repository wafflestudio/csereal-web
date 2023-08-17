'use client';

import Link from 'next/link';
import { useState } from 'react';
import useSwr from 'swr';

import { getNoticePosts, getNoticePostsMock } from '@/apis/notice';

import Pagination from '@/components/common/Pagination';
import SearchForm from '@/components/common/search/SearchForm';
import PageLayout from '@/components/layout/PageLayout';
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
  const [isEditMode, setIsEditMode] = useState<boolean>(false); // 편집 다른 pr에서 구현
  const [selectedPosts, setSelectedPosts] = useState<number[]>([]); // 마찬가지

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', page: pageNum });
  };

  return (
    <PageLayout titleType="big">
      <SearchForm
        tags={NoticeTags}
        initTags={tags}
        initKeyword={keyword ?? ''}
        setSearchParams={setSearchParams}
      />
      <NoticeList posts={posts} isEditMode={isEditMode} />
      <Pagination
        totalPostsCount={totalPostsCount}
        postsCountPerPage={POST_LIMIT}
        currentPage={page}
        setCurrentPage={setCurrentPage}
      />
      <div>
        <CreateButton mainPath={noticePath} />
      </div>
    </PageLayout>
  );
}

function CreateButton({ mainPath }: { mainPath: string }) {
  return (
    <Link href={`${mainPath}/create`}>
      <button
        type="button"
        className="w-[4.5rem] h-9 bg-neutral-700 text-white text-xs tracking-[0.02em]"
      >
        새 게시글
      </button>
    </Link>
  );
}
