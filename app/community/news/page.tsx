'use client';

import { useState } from 'react';

import { StraightNode } from '@/components/common/Nodes';
import Pagination from '@/components/common/Pagination';
import SearchForm from '@/components/common/search/SearchForm';
import PageLayout from '@/components/layout/PageLayout';

import { news } from '@/types/page';
import { NewsTags } from '@/types/tag';

import { useCustomSearchParams } from '@/utils/search';

const POST_LIMIT = 20;

export default function NewsPage({ params }: { params: { id: string } }) {
  const { page, keyword, tags, searchParams, setSearchParams } = useCustomSearchParams();
  const [totalPostsCount, setTotalPostsCount] = useState<number>(0);
  const pageTemp = page ? +page : 0;

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', page: pageNum });
  };

  return (
    <PageLayout currentPage={news} title="새 소식" titleSize="text-2xl">
      <SearchForm
        tags={NewsTags}
        initTags={tags}
        initKeyword={keyword ?? ''}
        setSearchParams={setSearchParams}
      />
      <StraightNode double={true} />
      <Pagination
        totalPostsCount={totalPostsCount}
        postsCountPerPage={POST_LIMIT}
        currentPage={pageTemp}
        setCurrentPage={setCurrentPage}
      />
    </PageLayout>
  );
}
