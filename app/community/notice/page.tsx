'use client';

import { useCallback, useEffect, useState } from 'react';

import { getNoticePostsAPI } from '@/apis/notice';

import { StraightNode } from '@/components/common/Nodes';
import Pagination from '@/components/common/Pagination';
import SearchForm from '@/components/common/search/SearchForm';
import PageLayout from '@/components/layout/PageLayout';
import NoticeList from '@/components/notice/NoticeList';

import { useCustomSearchParams } from '@/hooks/useCustomSearchParams';

import { notice } from '@/types/page';
import { NoticePostSimple } from '@/types/post';
import { NoticeTags, NewsTags } from '@/types/tag';

const NoticeMockLong: NoticePostSimple = {
  id: 1,
  title:
    '2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발 2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발',
  createdAt: '2023-07-11T09:29:13',
  isPinned: true,
};

const NoticeMock: NoticePostSimple = {
  id: 1,
  title: '2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발',
  createdAt: '2023-07-11T09:29:13',
  isPinned: false,
};

const NoticeMockPin: NoticePostSimple = {
  id: 2,
  title: '2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발 안내',
  createdAt: '2023-07-11T09:29:13',
  isPinned: true,
};

const noticeListMock = [
  NoticeMockLong,
  NoticeMockPin,
  NoticeMockPin,
  NoticeMockPin,
  NoticeMockPin,
  NoticeMockPin,
  NoticeMockPin,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
];

const POST_LIMIT = 20;

export default function NoticePage() {
  const { page, keyword, tags, searchParams, setSearchParams } = useCustomSearchParams();
  const [posts, setPosts] = useState<NoticePostSimple[]>([]);
  const [totalPostsCount, setTotalPostsCount] = useState<number>(0);
  const currentPage = parseInt(page ?? '1');

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', page: pageNum });
  };

  const searchPosts = useCallback(async () => {
    const data = await getNoticePostsAPI(searchParams);
    if (data) {
      setTotalPostsCount(data.total);
      setPosts(data.searchList);
    }
  }, [searchParams]);

  useEffect(() => {
    // searchPosts();
    setTotalPostsCount(noticeListMock.length);
    setPosts(noticeListMock);
  }, [currentPage, searchPosts]);

  return (
    <PageLayout currentPage={notice} title="공지사항" titleSize="text-2xl">
      <SearchForm
        tags={NoticeTags}
        initTags={tags ?? []}
        initKeyword={keyword ?? ''}
        setSearchParams={setSearchParams}
      />
      <StraightNode double={true} />
      <NoticeList posts={posts} />
      <Pagination
        totalPostsCount={totalPostsCount}
        postsCountPerPage={POST_LIMIT}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </PageLayout>
  );
}
