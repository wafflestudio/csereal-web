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
    // TODO: page layout 사용한 방식으로 변경
    // 현재는 SubNav의 차이 때문에 코드 복붙
    <div className="flex grow flex-col bg-neutral-900">
      <Header />
      {/* TODO: 임시로 넣은 main 교체 */}
      <PageTitle title={'통합 검색'} currentPage={main} titleType={'big'} margin={'mb-11'} />
      <div className="relative grow bg-white p-[1.75rem_1.25rem_4rem_1.25rem] sm:p-[2.75rem_360px_150px_100px]">
        <SearchBox tags={SEARCH_TAGS} key={keyword} />
        <div className="flex grow flex-col gap-20">
          <Suspense>
            <AboutSection keyword={keyword} />
            <CommunitySection keyword={keyword} />
            <ResearchSection keyword={keyword} />
            <AdmissionSection keyword={keyword} />
            <AcademicSection keyword={keyword} />
          </Suspense>
        </div>
        {/* <SubNavbar currentTab={currentPage} /> */}
      </div>
    </div>
  );
}
