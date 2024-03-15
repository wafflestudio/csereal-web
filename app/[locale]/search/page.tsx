import { Suspense } from 'react';

import SearchBox from '@/components/common/search/SearchBox';
import Header from '@/components/layout/header/Header';
import PageTitle from '@/components/layout/pageLayout/PageTitle';

import { SEARCH_TAGS } from '@/constants/tag';

import { main } from '@/utils/segmentNode';

import SearchResult from './SearchResult';

export default async function SearchPage({
  searchParams: { keyword },
}: {
  searchParams: { keyword: string };
}) {
  return (
    <div className="relative bg-neutral-900">
      <Header />
      {/* TODO: 임시로 넣은  currentPage={main} 대책 세우기*/}
      <PageTitle title={'통합 검색'} titleType="big" margin="mb-11" currentPage={main} />

      <div className={'relative bg-white pb-[150px] pl-[100px] pr-[360px] pt-[44px]'}>
        <SearchBox tags={SEARCH_TAGS} key={keyword} />

        <Suspense fallback={<SearchResultFallback />}>
          <SearchResult keyword={keyword} />
        </Suspense>
      </div>
    </div>
  );
}

const SearchResultFallback = () => <div className="grow" />;
