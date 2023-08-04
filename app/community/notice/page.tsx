'use client';

import { useCallback, useEffect, useState } from 'react';

import { getNoticePosts } from '@/apis/notice';

import { StraightNode } from '@/components/common/Nodes';
import Pagination from '@/components/common/Pagination';
import SearchForm from '@/components/common/search/SearchForm';
import PageLayout from '@/components/layout/PageLayout';
import NoticeList from '@/components/notice/NoticeList';

import { useCustomSearchParams } from '@/hooks/useCustomSearchParams';
import { useQueryString } from '@/hooks/useQueryString';

import { notice } from '@/types/page';
import { SimpleNoticePost } from '@/types/post';
import { NoticeTags } from '@/types/tag';

const NoticeMockLong: SimpleNoticePost = {
  id: 1,
  title:
    '2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발 2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발',
  createdAt: '2023-07-11T09:29:13',
  isPinned: true,
};

const NoticeMock: SimpleNoticePost = {
  id: 1,
  title: '2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발',
  createdAt: '2023-07-11T09:29:13',
  isPinned: false,
};

const NoticeMockPin: SimpleNoticePost = {
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
  const { page, keyword, tags, setSearchParams } = useCustomSearchParams();
  const [posts, setPosts] = useState<SimpleNoticePost[]>([]);
  const [totalPostsCount, setTotalPostsCount] = useState<number>(0);
  const queryString = useQueryString();

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', page: pageNum });
  };

  const searchPosts = useCallback(async () => {
    const data = await getNoticePosts({ page, keyword, tag: tags });
    setTotalPostsCount(data.total);
    setPosts(data.searchList);
  }, [page, keyword, tags]);

  useEffect(() => {
    // searchPosts();
    setTotalPostsCount(noticeListMock.length);
    setPosts(noticeListMock);
  }, [page, searchPosts]);

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
        currentPage={page}
        setCurrentPage={setCurrentPage}
      />
    </PageLayout>
  );
}
