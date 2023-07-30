'use client';

import { useCallback, useEffect, useState } from 'react';

import { getNoticePostsAPI } from '@/apis/notice';

import { StraightNode } from '@/components/common/Nodes';
import Pagination from '@/components/common/Pagination';
import SearchForm from '@/components/common/search/SearchForm';
import PageLayout from '@/components/layout/PageLayout';
import NoticeList from '@/components/notice/NoticeList';

import { Post } from '@/types/notice';
import { notice } from '@/types/page';
import { NoticeTags, NewsTags } from '@/types/tag';

import { useCustomSearchParams } from '@/utils/search';

const NoticeMock: Post = {
  id: 1,
  title: '2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발 안내',
  date: '2023/07/11',
  isPinned: false,
};

const NoticeMockPin: Post = {
  id: 2,
  title: '2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발 안내',
  date: '2023/07/11',
  isPinned: true,
};

const noticeListMock = [
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
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalPostsCount, setTotalPostsCount] = useState<number>(0);
  const currentPage = parseInt(page ?? '1');

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', page: pageNum });
  };

  // api 테스트 가능해지면 정확히 수정
  const getPosts = async () => {
    try {
      const res = await getNoticePostsAPI(searchParams);
      setTotalPostsCount(res.data.total);
      setPosts(res.data.posts);
    } catch (error) {
      console.log('error');
    }
  };

  useEffect(() => {
    // getPosts();
    setTotalPostsCount(noticeListMock.length);
    setPosts(noticeListMock);
    console.log(currentPage);
  }, [currentPage]);

  return (
    <PageLayout
      currentPage={notice}
      title="공지사항"
      titleSize="text-2xl"
      titleContentGap=""
      titleGrid="row-start-1 col-start-1"
    >
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
