'use client';

import { useState } from 'react';

import { StraightNode } from '@/components/common/Nodes';
import Pagination from '@/components/common/Pagination';
import SearchForm from '@/components/common/search/SearchForm';
import PageLayout from '@/components/layout/PageLayout';
import NewsRow, { NewsRowProps } from '@/components/news/NewsRow';

import { useCustomSearchParams } from '@/hooks/useCustomSearchParams';

import { news } from '@/types/page';
import { NewsTags } from '@/types/tag';

const POST_LIMIT = 10;

export default function NewsPage({ params }: { params: { id: string } }) {
  const { page, keyword, tags, setSearchParams } = useCustomSearchParams();
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
      <div className="flex flex-col gap-4 mt-10 mb-8">
        {<NewsRow {...makeMockNews()} />}
        {<NewsRow {...makeMockNews()} />}
        {<NewsRow {...makeMockNews()} />}
      </div>
      <Pagination
        totalPostsCount={totalPostsCount}
        postsCountPerPage={POST_LIMIT}
        currentPage={pageTemp}
        setCurrentPage={setCurrentPage}
      />
    </PageLayout>
  );
}

const makeMockNews = (): NewsRowProps => ({
  title: '김선 교수 연구진이 네트워크 사이언스와 머신러닝을 결합하여 약물에 적합한 질병을 예측',
  description:
    '김선 교수와 아이겐드럭 방동민 연구원이 주도한 인공지능 신약개발 분야 연구가 세계적으로 우수성을 인정받아 Nature Communications에 게재되었다. 김선 교수 연구진은 수십만가지의 의생물학적 데이터를 그래프 형태로 가공해 놓은 의생물학적 지식 그래프(biomedical knowledge graph)를 활용하여 약물약물약물약물약',
  tags: ['연구', '행사'],
  date: new Date(),
  imageURL: 'https://picsum.photos/id/237/320/240',
});
