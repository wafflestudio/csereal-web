'use client';

// import { useSearchParams } from 'next/navigation';

import { useEffect } from 'react';

import Category from '@/components/common/Category';
import PageTitle from '@/components/common/PageTitle';
import SearchBar from '@/components/common/SearchBar';
import Sidebar from '@/components/common/Sidebar';

import { notice } from '@/types/page';
import { NoticeTags } from '@/types/tag';

import { useMyURLSearchParams } from '@/utils/search';

export default function NoticePage() {
  const { getSearchParams, setSearchParams, deleteSearchParams } = useMyURLSearchParams();
  const { keyword, tags } = getSearchParams();

  const searchPosts = () => {};

  useEffect(() => {
    // 새로 랜더링 될 때마다 서버에 공지 목록 GET 요청 보내기
  }, []);

  return (
    <>
      <PageTitle currentPage={notice}>
        <h3 className="text-2xl font-bold break-keep font-yoon">공지사항</h3>
      </PageTitle>
      <div className="flex">
        <div className="w-[850px]">
          <Category
            category={NoticeTags}
            selectedTags={tags}
            setSearchParams={setSearchParams}
            deleteSearchParams={deleteSearchParams}
          />
          <SearchBar keyword={keyword ?? ''} setSearchParams={setSearchParams} />
        </div>
        <Sidebar currentTab={notice} />
      </div>
    </>
  );
}
