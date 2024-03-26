import { Suspense } from 'react';

import MagnificentGlass from '@/public/image/search/magnificent_glass.svg';

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
import NoSearchResultError from './NoSearchResultError';
import ResearchSection from './ResearchSection';

// TODO: page layout 사용한 방식으로 변경
// 현재는 SubNav의 차이 때문에 코드 복붙
export default async function SearchPage({
  searchParams: { keyword, tag },
}: {
  searchParams: { keyword?: string; tag?: string[] };
}) {
  return (
    <div className="flex grow flex-col bg-neutral-900">
      <Header />
      {/* TODO: 임시로 넣은 main 교체 */}
      <PageTitle title={'통합 검색'} currentPage={main} titleType={'big'} margin={'mb-11'} />
      <div className="relative grow bg-white p-[1.75rem_1.25rem_4rem_1.25rem] sm:p-[2.75rem_360px_150px_100px]">
        <SearchBox tags={SEARCH_TAGS} key={keyword} />

        {keyword === undefined || keyword.length < 2 ? (
          <KeywordShortError />
        ) : (
          <SearchResult keyword={keyword} tag={tag} />
        )}

        <NoSearchResultError tag={tag} />

        {/* <SubNavbar currentTab={currentPage} /> */}
      </div>
    </div>
  );
}

const KeywordShortError = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-base font-medium text-neutral-300">검색어를 두글자 이상 입력해주세요</p>
      <MagnificentGlass />
    </div>
  );
};

// MEMO: Blocking을 막기 위해 각 섹션에서 독립적으로 fetch합니다
// 검색결과 없음을 나타내는 컴포넌트에서도 동일한 fetch를 하지만 하나의 렌더에서 fetch는 캐싱된다고 알고 있어서 괜찮을 것 같습니다(확인 필요)
const SearchResult = ({ keyword, tag }: { keyword: string; tag?: string[] }) => {
  return (
    <div className="flex grow flex-col gap-20">
      <Suspense>{isSectionVisible('소개', tag) && <AboutSection keyword={keyword} />}</Suspense>
      <Suspense>{isSectionVisible('소식', tag) && <CommunitySection keyword={keyword} />}</Suspense>
      <Suspense>{isSectionVisible('구성원', tag) && <MemberSection keyword={keyword} />}</Suspense>
      <Suspense>{isSectionVisible('연구', tag) && <ResearchSection keyword={keyword} />}</Suspense>
      <Suspense>{isSectionVisible('입학', tag) && <AdmissionSection keyword={keyword} />}</Suspense>
      <Suspense>
        {isSectionVisible('학사 및 교과', tag) && <AcademicSection keyword={keyword} />}
      </Suspense>
    </div>
  );
};

const isSectionVisible = (sectionName: string, tagList?: string[]) =>
  tagList === undefined || tagList.length === 0 || tagList.includes(sectionName);
