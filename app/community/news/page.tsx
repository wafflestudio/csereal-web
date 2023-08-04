'use client';

import { useCallback, useEffect, useState } from 'react';

import { getMockNewsPosts } from '@/apis/news';

import { StraightNode } from '@/components/common/Nodes';
import Pagination from '@/components/common/Pagination';
import SearchForm from '@/components/common/search/SearchForm';
import PageLayout from '@/components/layout/PageLayout';
import NewsRow from '@/components/news/NewsRow';

import { useCustomSearchParams } from '@/hooks/useCustomSearchParams';

import { news } from '@/types/page';
import { GETNewsPostsResponse } from '@/types/post';
import { NewsTags } from '@/types/tag';

const POST_LIMIT = 10;

export default function NewsPage() {
  const { page, keyword, tags, setSearchParams } = useCustomSearchParams();
  const [totalPostsCount, setTotalPostsCount] = useState<number>(0);
  const [posts, setPosts] = useState<GETNewsPostsResponse['searchList']>([]);

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', page: pageNum });
  };

  const fetchPost = useCallback(async () => {
    const resp = await getMockNewsPosts({
      tag: tags,
      keyword: keyword === null ? undefined : keyword,
      page: page,
    });
    setTotalPostsCount(resp.total);
    setPosts(resp.searchList);
  }, [keyword, page, tags]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  return (
    <PageLayout currentPage={news} title="새 소식" titleSize="text-2xl">
      <SearchForm
        key={tags + ''}
        tags={NewsTags}
        initTags={tags}
        initKeyword={keyword ?? ''}
        setSearchParams={setSearchParams}
      />
      <StraightNode double={true} />
      <div className="flex flex-col gap-4 mt-10 mb-8">
        {posts.map((post) => (
          <NewsRow
            key={post.id}
            title={post.title}
            description={post.description}
            tags={post.tags}
            date={new Date(post.createdAt)}
            imageURL={post.imageURL}
          />
        ))}
      </div>
      <Pagination
        totalPostsCount={totalPostsCount}
        postsCountPerPage={POST_LIMIT}
        currentPage={page}
        setCurrentPage={setCurrentPage}
      />
    </PageLayout>
  );
}
