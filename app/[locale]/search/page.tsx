import { Suspense } from 'react';

import SearchBox from '@/components/common/search/SearchBox';
import Header from '@/components/layout/header/Header';
import PageTitle from '@/components/layout/pageLayout/PageTitle';

import { SEARCH_TAGS } from '@/constants/tag';

import { main } from '@/utils/segmentNode';

import AboutSection from './AboutSection';
import AcademicSection from './AcademicSection';
import AdmissionSection from './AdmissionSection';
import CommunitySection from './CommunitySection';
import ResearchSection from './ResearchSection';

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
        <div className="flex w-[52.5rem] grow flex-col gap-20">
          <Suspense>
            <AboutSection keyword={keyword} />
            <CommunitySection keyword={keyword} />
            <ResearchSection keyword={keyword} />
            <AdmissionSection keyword={keyword} />
            <AcademicSection keyword={keyword} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
