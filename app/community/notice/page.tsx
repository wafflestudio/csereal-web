'use client';

// import { useSearchParams } from 'next/navigation';

import { useEffect } from 'react';

import Category from '@/components/common/Category';
import Filter from '@/components/common/Filter';
import PageTitle from '@/components/common/PageTitle';
import SearchBar from '@/components/common/SearchBar';
import Sidebar from '@/components/common/Sidebar';

import { academics, notice } from '@/types/page';
import { tagCategory } from '@/types/tag';

import { useMyURLSearchParams } from '@/utils/search';

export default function NoticePage() {
  const { getSearchParams, setSearchParams } = useMyURLSearchParams();

  const searchPosts = () => {};

  useEffect(() => {
    // 새로 랜더링 될 때마다 서버에 공지 목록 GET 요청 보내기
    const queries = getSearchParams();
    const { keyword, tags } = queries;
  }, []);

  return (
    <>
      <PageTitle currentPage={notice}>
        <h3 className="text-2xl font-bold break-keep font-yoon">공지사항</h3>
      </PageTitle>
      <div className="flex">
        <div className="w-[850px]">
          <Category category={tagCategory} />
          <SearchBar setSearchParams={setSearchParams} />
        </div>
        <Sidebar currentTab={notice} />
      </div>
    </>
  );
}
