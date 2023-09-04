'use client';

import useSWR from 'swr';

import { getSeminarPosts } from '@/apis/seminar';

import Pagination from '@/components/common/Pagination';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import SeminarSearchBar from '@/components/seminar/SearchBar';
import SeminarRow from '@/components/seminar/SeminarRow';
import SeminarYear from '@/components/seminar/SeminarYear';

import { useCustomSearchParams } from '@/hooks/useCustomSearchParams';

import { PostSearchQueryParams } from '@/types/post';

const postsCountPerPage = 10;

interface SeminarPageParams {
  searchParams: PostSearchQueryParams;
}

export default function SeminarPage({ searchParams }: SeminarPageParams) {
  const { page, keyword, setSearchParams } = useCustomSearchParams();

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', page: pageNum });
  };

  const { data } = useSWR(
    { url: '/seminar', params: { keyword, page } },
    getSeminarPosts, // 추후 fetcher 삭제
  );

  return (
    <PageLayout titleType="big" titleMargin="mb-12">
      <SeminarSearchBar setSearchParams={setSearchParams} />
      <div className="flex flex-col mt-12 mb-8 border-neutral-200 border-b-[1px]">
        {data?.searchList.map((post, index) => (
          <div key={post.id}>
            {post.isYearLast && <SeminarYear index={index} startDate={post.startDate} />}
            <SeminarRow
              id={post.id}
              title={post.title}
              host={post.name}
              company={post.affiliation}
              date={new Date(post.startDate)}
              location={post.location}
              imageURL={post.imageURL}
              isYearLast={post.isYearLast}
            />
          </div>
        ))}
      </div>
      <Pagination
        totalPostsCount={data?.total ?? 0}
        postsCountPerPage={postsCountPerPage}
        currentPage={page}
        setCurrentPage={setCurrentPage}
      />
    </PageLayout>
  );
}
