'use client';

import { useCallback, useEffect } from 'react';

import { StraightNode } from '@/components/common/Nodes';
import SearchForm from '@/components/common/search/SearchForm';
import PageLayout from '@/components/layout/PageLayout';
import NoticeList from '@/components/notice/NoticeList';

import { notice } from '@/types/page';
import { NoticeTags, NewsTags } from '@/types/tag';

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
    <PageLayout
      currentPage={notice}
      title="공지사항"
      titleSize="text-2xl"
      titleContentGap=""
      titleGrid="row-start-1 col-start-1"
    >
      <SearchForm
        tags={NoticeTags}
        initTags={tags ?? []}
        initKeyword={keyword ?? ''}
        setSearchParams={setSearchParams}
      />
      <StraightNode double={true} />
      <NoticeList />
    </PageLayout>
  );
}
