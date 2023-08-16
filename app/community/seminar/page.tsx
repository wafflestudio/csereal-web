'use client';

import { useCallback, useEffect, useState } from 'react';

import { getMockSeminarPosts } from '@/apis/seminar';

import Pagination from '@/components/common/Pagination';
import PageLayout from '@/components/layout/PageLayout';
import SeminarSearchBar from '@/components/seminar/SearchBar';
import SeminarRow from '@/components/seminar/SeminarRow';

import { useCustomSearchParams } from '@/hooks/useCustomSearchParams';

import { seminar } from '@/types/page';
import { GETSeminarPostsResponse, SimpleSeminarPost } from '@/types/post';

const postsCountPerPage = 10;

interface SeminarListWithYear extends SimpleSeminarPost {
  year?: number;
}

export default function SeminarPage() {
  const { page, keyword, setSearchParams } = useCustomSearchParams();
  const [totalPostsCount, setTotalPostsCount] = useState(0);
  const [posts, setPosts] = useState<SeminarListWithYear[]>([]);
  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', page: pageNum });
  };

  const fetchPost = useCallback(async () => {
    const res = await getMockSeminarPosts({
      keyword: keyword === null ? undefined : keyword,
      page: page,
    });

    const postsWithYear: SeminarListWithYear[] = [];

    res.seminarList.forEach((post) => {
      const postYear = new Date(post.date).getFullYear();

      if (post.isLast) {
        postsWithYear.push({
          ...post,
          year: postYear,
        });
      } else {
        postsWithYear.push({
          ...post,
        });
      }
    });

    setTotalPostsCount(res.total);
    setPosts(postsWithYear);
  }, [keyword, page]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  return (
    <PageLayout titleType="big">
      <div className="flex flex-row items-center gap-6">
        <h3 className="text-neutral-700 font-yoon text-md font-bold w-7 text-center leading-[1.2rem]">
          검색
        </h3>
        <SeminarSearchBar setSearchParams={setSearchParams} />
      </div>
      <div className="flex flex-col mt-10 mb-8">
        {posts.map((post, i) => (
          <div key={post.year}>
            {post.isLast && (
              <div className={`border-b-[1px] border-neutral-500 ${i !== 0 ? 'mt-12' : null}`}>
                <h3 className="text-neutral-700 font-noto text-[1.25rem] font-bold pb-[.69rem] w-[4.5rem] text-center leading-7">
                  {post.year}
                </h3>
              </div>
            )}
            <SeminarRow
              title={post.title}
              host={post.host}
              company={post.company}
              date={new Date(post.date)}
              location={post.location}
              imageURL={post.imageURL}
            />
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
