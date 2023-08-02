'use client';

import { useState } from 'react';

import { StraightNode } from '@/components/common/Nodes';
import Pagination from '@/components/common/Pagination';
import SearchForm from '@/components/common/search/SearchForm';
import Tags from '@/components/common/Tags';
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

  console.log(tags);

  return (
    <PageLayout currentPage={news} title="새 소식" titleSize="text-2xl">
      <SearchForm
        tags={NewsTags}
        initTags={tags}
        initKeyword={keyword ?? ''}
        setSearchParams={setSearchParams}
      />
      <StraightNode double={true} />
      {<NewsRow {...makeMockNews()} />}
      <Pagination
        totalPostsCount={totalPostsCount}
        postsCountPerPage={POST_LIMIT}
        currentPage={pageTemp}
        setCurrentPage={setCurrentPage}
      />
    </PageLayout>
  );
}

interface NewsRowProps {
  title: string;
  description: string;
  tags: string[];
  date: Date;
  imageURL: string;
}

function NewsRow({ title, description, tags, date, imageURL }: NewsRowProps) {
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      <Tags tags={tags} page={news} />
    </>
  );
}

const makeMockNews = (): NewsRowProps => ({
  title: 'TITLE',
  description: 'DESCRIPTION',
  tags: ['TAGA', 'TAGB', '행사'],
  date: new Date(),
  imageURL: '',
});
