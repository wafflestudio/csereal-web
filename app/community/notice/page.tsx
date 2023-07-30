'use client';

import { useCallback, useEffect, useState } from 'react';

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
  isPinned: false,
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
  const { page, keyword, tags, setSearchParams } = useCustomSearchParams();
  const [posts, setPosts] = useState<Post[]>(noticeListMock);
  const currentPage = parseInt(page ?? '1');

  const setCurrentPageNumber = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', page: pageNum });
  };

  const searchPosts = useCallback(() => {
    () => {
      console.log('congratulations! successful search!');
    };
  }, []);

  useEffect(() => {
    searchPosts();
    // 새로 랜더링 될 때마다 서버에 공지 목록 GET 요청 보내기 (태그, 검색어, 페이지네이션 정보 담아서)
  }, [searchPosts]);

  useEffect(() => {
    console.log('first');
  }, []);

  useEffect(() => {
    console.log('curenAGe: ', currentPage);
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
        total={noticeListMock.length}
        postLimit={POST_LIMIT}
        current={currentPage}
        setCurrent={setCurrentPageNumber}
      />
    </PageLayout>
  );
}
