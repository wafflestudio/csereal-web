'use client';

import { useEffect } from 'react';

import PageTitle from '@/components/common/PageTitle';
import SearchBar from '@/components/common/SearchBar';
import Sidebar from '@/components/common/Sidebar';
import TagCategory from '@/components/common/TagCategory';

import { notice } from '@/types/page';
import { NoticeTags } from '@/types/tag';

import { useCustomSearchParams } from '@/utils/search';

export default function NoticePage() {
  const { keyword, tags, setSearchParams } = useCustomSearchParams();

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
          <TagCategory
            category={NoticeTags}
            selectedTags={tags}
            setSearchParams={setSearchParams}
          />
          <SearchBar keyword={keyword ?? ''} setSearchParams={setSearchParams} />
        </div>
        <Sidebar currentTab={notice} />
      </div>
    </>
  );
}
