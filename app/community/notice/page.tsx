'use client';

import { useCallback, useEffect } from 'react';

import PageTitle from '@/components/common/PageTitle';
import SearchForm from '@/components/common/Search/SearchForm';
import Sidebar from '@/components/common/Sidebar';

import { notice } from '@/types/page';
import { NoticeTags } from '@/types/tag';

import { useCustomSearchParams } from '@/utils/search';

export default function NoticePage() {
  const { keyword, tags, setSearchParams } = useCustomSearchParams();

  const searchPosts = useCallback(() => {
    () => {
      console.log('congratulations! successful search!');
    };
  }, []);

  useEffect(() => {
    searchPosts();
    // 새로 랜더링 될 때마다 서버에 공지 목록 GET 요청 보내기
  }, [searchPosts]);

  return (
    <>
      <PageTitle currentPage={notice}>
        <h3 className="text-2xl font-bold break-keep font-yoon">공지사항</h3>
      </PageTitle>
      <div className="flex">
        <SearchForm
          tags={NoticeTags}
          initTags={tags}
          initKeyword={keyword ?? ''}
          setSearchParams={setSearchParams}
        />
        <Sidebar currentTab={notice} />
      </div>
    </>
  );
}
