'use client';

import { useCallback, useEffect, useState } from 'react';

import { getMockSeminarPosts } from '@/apis/seminar';

import Pagination from '@/components/common/Pagination';
import PageLayout from '@/components/layout/PageLayout';
import SeminarSearchBar from '@/components/seminar/SearchBar';
import SeminarRow from '@/components/seminar/SeminarRow';

import { useCustomSearchParams } from '@/hooks/useCustomSearchParams';

import { seminar } from '@/types/page';
import { GETSeminarPostsResponse } from '@/types/post';

const postsCountPerPage = 10;

export default function SeminarPage() {
  const { page, keyword, setSearchParams } = useCustomSearchParams();
  const [totalPostsCount, setTotalPostsCount] = useState(0);
  const [posts, setPosts] = useState<GETSeminarPostsResponse['searchList']>([]);

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', page: pageNum });
  };

  const fetchPost = useCallback(async () => {
    const res = await getMockSeminarPosts({
      keyword: keyword === null ? undefined : keyword,
      page: page,
    });
    setTotalPostsCount(res.total);
    setPosts(res.searchList);
  }, [keyword, page]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  return (
    <PageLayout currentPage={seminar} title="세미나" titleSize="text-2xl">
      <div className="flex flex-row items-center gap-6">
        <h3 className="text-neutral-700 font-yoon text-md font-bold w-7 text-center leading-[1.2rem]">
          검색
        </h3>
        <SeminarSearchBar setSearchParams={setSearchParams} />
      </div>
      <div className="flex flex-col gap-12 mt-10 mb-8">
        {posts.map((post) => (
          <div key={post.year}>
            <div className="border-b-[1px] border-neutral-500">
              <h3 className="text-neutral-700 font-noto text-[1.25rem] font-bold pb-[.69rem] w-[4.5rem] text-center leading-7">
                {post.year}
              </h3>
            </div>
            {post.seminarList.map((seminar) => (
              <SeminarRow
                key={seminar.id}
                title={seminar.title}
                host={seminar.host}
                company={seminar.company}
                date={new Date(seminar.date)}
                location={seminar.location}
                imageURL={seminar.imageURL}
              />
            ))}
          </div>
        ))}
      </div>
      <Pagination
        totalPostsCount={totalPostsCount}
        postsCountPerPage={postsCountPerPage}
        currentPage={page}
        setCurrentPage={setCurrentPage}
      />
    </PageLayout>
  );
}
