'use client';

import useSWR from 'swr';

import { getMockNewsPosts } from '@/apis/news';

import Pagination from '@/components/common/Pagination';
import SearchForm from '@/components/common/search/SearchForm';
import PageLayout from '@/components/layout/PageLayout';
import NewsRow from '@/components/news/NewsRow';

import { NewsTags } from '@/constants/tag';

import { useCustomSearchParams } from '@/hooks/useCustomSearchParams';
import { useQueryString } from '@/hooks/useQueryString';

import { news } from '@/types/page';

import { getPath } from '@/utils/page';

const POST_LIMIT = 10;
const newsPath = getPath(news);

export default function NewsPage() {
  const { page, keyword, tags, setSearchParams } = useCustomSearchParams();
  const queryString = useQueryString();
  const {
    data: { searchList: posts = [], total: totalPostsCount = 0 } = {},
    isLoading, // TODO: 로딩 컴포넌트
    error, // TODO: 에러 컴포넌트?
  } = useSWR({ url: '/news', params: { page, keyword, tag: tags } }, getMockNewsPosts); // 추후 fetcher 삭제

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', page: pageNum });
  };

  return (
    <PageLayout titleType="big">
      <SearchForm
        key={tags + ''}
        tags={NewsTags}
        initTags={tags}
        initKeyword={keyword ?? ''}
        setSearchParams={setSearchParams}
      />
      <div className="flex flex-col gap-4 mt-10 mb-8">
        {posts.map((post) => (
          <NewsRow
            key={post.id}
            href={`${newsPath}/${post.id}${queryString}`}
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
