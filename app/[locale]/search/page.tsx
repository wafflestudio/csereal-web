import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ReactNode } from 'react';

import SearchBox from '@/components/common/search/SearchBox';
import Header from '@/components/layout/header/Header';
import PageTitle from '@/components/layout/pageLayout/PageTitle';
import { SEARCH_TAGS } from '@/constants/tag';
import MagnificentGlass from '@/public/image/search/magnificent_glass.svg';
import { getMetadata } from '@/utils/metadata';
import { main } from '@/utils/segmentNode';

import AboutSection from './AboutSection';
import AcademicSection from './AcademicSection';
import AdmissionSection from './AdmissionSection';
import CommunitySection from './CommunitySection';
import fetchContent from './fetchContent';
import NoSearchResultError from './helper/NoSearchResultError';
import SearchSubNavbar, { TreeNode } from './helper/SearchSubNavbar';
import MemberSection from './MemberSection';
import ResearchSection from './ResearchSection';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  const { locale } = params;

  const t = await getTranslations('Nav');

  return await getMetadata({
    locale,
    metadata: {
      title: t('통합 검색'),
      description: '서울대학교 컴퓨터공학부 통합 검색 페이지입니다.',
    },
  });
}

export default async function SearchPage(props: {
  searchParams: Promise<{ keyword?: string; tag?: string[] }>;
}) {
  const searchParams = await props.searchParams;

  const { keyword, tag } = searchParams;

  // 검색어 길이 예외 처리
  // 모바일에서는 네비바에서 검색창으로 이동하는데, 이 경우 keyword.length가 0이므로 0일 때는 아무것도 띄우지 않는다.
  if (keyword === undefined) return <SearchPageLayout />;

  if (keyword.length < 2)
    return (
      <SearchPageLayout>
        <KeywordShortError />
      </SearchPageLayout>
    );

  const { sectionContent, total, node } = await fetchContent(keyword, tag);

  // 검색 결과 없음 예외 처리
  if (total === 0) {
    return (
      <SearchPageLayout node={node}>
        <NoSearchResultError />
      </SearchPageLayout>
    );
  }

  return (
    <SearchPageLayout node={node}>
      <p className="mb-11 ml-3 text-md  text-neutral-500 sm:mb-14">{total}개의 검색결과</p>
      <div className="flex grow flex-col gap-20">
        {sectionContent[0] && <AboutSection about={sectionContent[0]} />}
        {sectionContent[1] && (
          <CommunitySection
            keyword={keyword}
            notice={sectionContent[1]}
            news={sectionContent[2]!}
            seminar={sectionContent[3]!}
          />
        )}
        {sectionContent[4] && <MemberSection member={sectionContent[4]} />}
        {sectionContent[5] && <ResearchSection research={sectionContent[5]} />}
        {sectionContent[6] && <AdmissionSection admission={sectionContent[6]} />}
        {sectionContent[7] && <AcademicSection academic={sectionContent[7]} />}
      </div>
    </SearchPageLayout>
  );
}

// TODO: page layout 사용한 방식으로 변경
// 현재는 SubNav의 차이 때문에 코드 복붙
const SearchPageLayout = ({ node, children }: { node?: TreeNode[]; children?: ReactNode }) => {
  return (
    <div className="flex grow flex-col bg-neutral-900">
      <Header />
      {/* TODO: 임시로 넣은 main 교체 */}
      <PageTitle title={'통합 검색'} currentPage={main} titleType={'big'} margin={'mb-11'} />
      <div className="relative grow bg-white p-[1.75rem_1.25rem_4rem_1.25rem] sm:p-[2.75rem_360px_150px_100px]">
        <SearchBox tags={SEARCH_TAGS} formOnly />
        {children}
        {node !== undefined && <SearchSubNavbar node={node} />}
      </div>
    </div>
  );
};

const KeywordShortError = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-base font-medium text-neutral-300">검색어를 두글자 이상 입력해주세요</p>
      <MagnificentGlass />
    </div>
  );
};
