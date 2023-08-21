'use client';

import useSWR from 'swr';

import { getMockSeminarPosts } from '@/apis/seminar';

import Pagination from '@/components/common/Pagination';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import SeminarSearchBar from '@/components/seminar/SearchBar';
import SeminarRow from '@/components/seminar/SeminarRow';

import { useCustomSearchParams } from '@/hooks/useCustomSearchParams';

const postsCountPerPage = 10;

export default function SeminarPage() {
  const { page, keyword, setSearchParams } = useCustomSearchParams();

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', page: pageNum });
  };

  const { data, isLoading, error } = useSWR([keyword, page], getMockSeminarPosts);

  return (
    data && (
      <PageLayout titleType="big" titleMargin="mb-6">
        <div className="flex flex-row items-center gap-6">
          <h3 className="text-neutral-700 font-yoon text-md font-bold w-7 text-center leading-[1.2rem]">
            검색
          </h3>
          <SeminarSearchBar setSearchParams={setSearchParams} />
        </div>
        <div className="flex flex-col mt-10 mb-8 border-neutral-200 border-b-[1px]">
          {data.searchList.map((post, i) => (
            <div key={i}>
              {post.isYearLast && (
                <div className={`border-b-[1px] border-neutral-500 ${i !== 0 ? 'mt-12' : null}`}>
                  <h3 className="text-neutral-700 font-noto text-[1.25rem] font-bold pb-[.69rem] w-[4.5rem] text-center leading-7">
                    {new Date(post.startDate).getFullYear()}
                  </h3>
                </div>
              )}
              <SeminarRow
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
          totalPostsCount={data.total}
          postsCountPerPage={postsCountPerPage}
          currentPage={page}
          setCurrentPage={setCurrentPage}
        />
      </PageLayout>
    )
  );
}
