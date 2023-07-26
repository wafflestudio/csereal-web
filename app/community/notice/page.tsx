'use client';

import { useSearchParams } from 'next/navigation';

import Category from '@/components/common/Category';
import Filter from '@/components/common/Filter';
import PageTitle from '@/components/common/PageTitle';
import SearchBar from '@/components/common/SearchBar';
import Sidebar from '@/components/common/Sidebar';

import { academics, notice } from '@/types/page';
import { tagCategory } from '@/types/tag';

export default function NoticePage() {
  const searchParams = useSearchParams();
  console.log(searchParams.getAll('tag'));

  return (
    <>
      <PageTitle currentPage={notice}>
        <h3 className="text-2xl font-bold break-keep font-yoon">공지사항</h3>
      </PageTitle>
      <div className="flex">
        <div className="w-[850px]">
          <Category category={tagCategory} />
          <SearchBar />
        </div>
        <Sidebar currentTab={notice} />
      </div>
    </>
  );
}
