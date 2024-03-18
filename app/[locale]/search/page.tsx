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
import MemberSection from './MemberSection';
import ResearchSection from './ResearchSection';

export default async function SearchPage({
  searchParams: { keyword, tag },
}: {
  searchParams: { keyword: string; tag?: string[] };
}) {
  return (
    // TODO: page layout 사용한 방식으로 변경
    // 현재는 SubNav의 차이 때문에 코드 복붙
    // TODO: 검색결과 없을 때, 검색 텍스트 짧을 때 예외 처리
    <div className="flex grow flex-col bg-neutral-900">
      <Header />
      {/* TODO: 임시로 넣은 main 교체 */}
      <PageTitle title={'통합 검색'} currentPage={main} titleType={'big'} margin={'mb-11'} />
      <div className="relative grow bg-white p-[1.75rem_1.25rem_4rem_1.25rem] sm:p-[2.75rem_360px_150px_100px]">
        <SearchBox tags={SEARCH_TAGS} key={keyword} />
        <div className="flex grow flex-col gap-20">
          <Suspense>{isSectionVisible('소개', tag) && <AboutSection keyword={keyword} />}</Suspense>
          <Suspense>
            {isSectionVisible('소식', tag) && <CommunitySection keyword={keyword} />}
          </Suspense>
          <Suspense>
            {isSectionVisible('구성원', tag) && <MemberSection keyword={keyword} />}
          </Suspense>
          <Suspense>
            {isSectionVisible('연구', tag) && <ResearchSection keyword={keyword} />}
          </Suspense>
          <Suspense>
            {isSectionVisible('입학', tag) && <AdmissionSection keyword={keyword} />}
          </Suspense>
          <Suspense>
            {isSectionVisible('학사 및 교과', tag) && <AcademicSection keyword={keyword} />}
          </Suspense>
        </div>
        {/* <SubNavbar currentTab={currentPage} /> */}
      </div>
    </div>
  );
}

const isSectionVisible = (sectionName: string, tagList?: string[]) =>
  tagList === undefined || tagList.length === 0 || tagList.includes(sectionName);
