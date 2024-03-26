import { ReactNode } from 'react';

import MagnificentGlass from '@/public/image/search/magnificent_glass.svg';

import {
  searchAbout,
  searchAcademics,
  searchAdmissions,
  searchMember,
  searchNews,
  searchNotice,
  searchResearch,
} from '@/apis/search';
import { getSeminarPosts } from '@/apis/seminar';

import SearchBox from '@/components/common/search/SearchBox';
import Header from '@/components/layout/header/Header';
import PageTitle from '@/components/layout/pageLayout/PageTitle';

import { SEARCH_TAGS } from '@/constants/tag';

import { main } from '@/utils/segmentNode';

import AboutSection from './AboutSection';
import AcademicSection from './AcademicSection';
import AdmissionSection from './AdmissionSection';
import CommunitySection from './CommunitySection';
import NoSearchResultError from './helper/NoSearchResultError';
import SearchSubNavbar, { TreeNode } from './helper/SearchSubNavbar';
import MemberSection from './MemberSection';
import ResearchSection from './ResearchSection';

// TODO: page layout 사용한 방식으로 변경
// 현재는 SubNav의 차이 때문에 코드 복붙
export default async function SearchPage({
  searchParams: { keyword, tag },
}: {
  searchParams: { keyword?: string; tag?: string[] };
}) {
  // 검색어 길이 예외 처리
  if (keyword === undefined || keyword.length < 2) {
    return (
      <SearchPageLayout>
        <KeywordShortError />
      </SearchPageLayout>
    );
  }

  // TODO: 필요한 정보만 fetch
  const about = await searchAbout({ keyword, number: 3, amount: 200 });
  const [notice, news, seminar] = await Promise.all([
    searchNotice({ keyword, number: 3, amount: 200 }),
    searchNews({ keyword, number: 3, amount: 200 }),
    getSeminarPosts({ keyword, pageNum: '1' }),
  ]);
  const member = await searchMember({ keyword, number: 10, amount: 200 });
  const research = await searchResearch({ keyword, number: 3, amount: 200 });
  const admission = await searchAdmissions({ keyword, number: 3, amount: 200 });
  const academic = await searchAcademics({ keyword, number: 3, amount: 200 });

  let total = 0;
  const node: TreeNode[] = [];
  if (isSectionVisible('소개', tag)) {
    total += about.total;
    about.total && node.push({ name: `소개(${about.total})` });
  }
  if (isSectionVisible('소식', tag)) {
    const sectionTotal = notice.total + news.total + seminar.total;
    total += sectionTotal;
    sectionTotal &&
      node.push({
        name: `소식(${sectionTotal})`,
        children: [
          { name: `공지사항(${notice.total})` },
          { name: `새 소식(${news.total})` },
          { name: `세미나(${seminar.total})` },
        ],
      });
  }
  if (isSectionVisible('구성원', tag)) {
    total += member.total;
    member.total && node.push({ name: `구성원(${member.total})` });
  }
  if (isSectionVisible('연구', tag)) {
    total += research.total;
    research.total && node.push({ name: `연구(${research.total})` });
  }
  if (isSectionVisible('입학', tag)) {
    total += admission.total;
    admission.total && node.push({ name: `입학(${admission.total})` });
  }
  if (isSectionVisible('학사 및 교과', tag)) {
    total += academic.total;
    academic.total && node.push({ name: `학사 및 교과(${academic.total})` });
  }

  node.unshift({ name: `전체(${total})`, bold: true });

  // 검색 결과 없음 예외 처리
  if (total === 0) {
    return (
      <SearchPageLayout>
        <NoSearchResultError />
      </SearchPageLayout>
    );
  }

  return (
    <SearchPageLayout node={node}>
      <p className="mb-14 ml-[0.62rem]  text-md text-neutral-500">{total}개의 검색결과</p>
      <div className="flex grow flex-col gap-20">
        {isSectionVisible('소개', tag) && <AboutSection about={about} />}
        {isSectionVisible('소식', tag) && (
          <CommunitySection keyword={keyword} notice={notice} news={news} seminar={seminar} />
        )}
        {isSectionVisible('구성원', tag) && <MemberSection member={member} />}
        {isSectionVisible('연구', tag) && <ResearchSection research={research} />}
        {isSectionVisible('입학', tag) && <AdmissionSection admission={admission} />}
        {isSectionVisible('학사 및 교과', tag) && <AcademicSection academic={academic} />}
      </div>
    </SearchPageLayout>
  );
}

const SearchPageLayout = ({
  keyword,
  node,
  children,
}: {
  keyword?: string;
  node?: TreeNode[];
  children: ReactNode;
}) => {
  return (
    <div className="flex grow flex-col bg-neutral-900">
      <Header />
      {/* TODO: 임시로 넣은 main 교체 */}
      <PageTitle title={'통합 검색'} currentPage={main} titleType={'big'} margin={'mb-11'} />
      <div className="relative grow bg-white p-[1.75rem_1.25rem_4rem_1.25rem] sm:p-[2.75rem_360px_150px_100px]">
        <SearchBox tags={SEARCH_TAGS} key={keyword} formOnly />
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

const isSectionVisible = (
  sectionName: '소개' | '소식' | '구성원' | '연구' | '입학' | '학사 및 교과',
  tagList?: string[],
) => tagList === undefined || tagList.length === 0 || tagList.includes(sectionName);
