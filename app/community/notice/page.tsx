'use client';

import useSwr from 'swr';

import { getNoticePosts, getNoticePostsMock } from '@/apis/notice';

import { StraightNode } from '@/components/common/Nodes';
import Pagination from '@/components/common/Pagination';
import SearchForm from '@/components/common/search/SearchForm';
import Tags from '@/components/common/Tags';
import PageLayout from '@/components/layout/PageLayout';
import NoticeList from '@/components/notice/NoticeList';

import { NoticeTags } from '@/constants/tag';

import { useCustomSearchParams } from '@/hooks/useCustomSearchParams';

import { GETNoticePostsResponse } from '@/types/post';

const POST_LIMIT = 20;

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

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', page: pageNum });
  };

  return (
    <PageLayout titleSize="text-2xl">
      <SearchForm
        tags={NoticeTags}
        initTags={tags}
        initKeyword={keyword ?? ''}
        setSearchParams={setSearchParams}
      />
      <StraightNode double={true} />
      <Tags tags={tags.length ? tags : ['전체']} margin="mt-3 ml-2.5" />
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
