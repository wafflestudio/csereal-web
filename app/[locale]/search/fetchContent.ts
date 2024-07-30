import {
  searchAbout,
  searchNotice,
  searchNews,
  searchMember,
  searchResearch,
  searchAdmissions,
  searchAcademics,
} from '@/apis/search';
import { getSeminarPosts } from '@/apis/seminar';

import {
  AboutSearchResult,
  NoticeSearchResult,
  NewsSearchResult,
  MemberSearchResult,
  ResearchSearchResult,
  AdmissionsSearchResult,
  AcademicsSearchResult,
} from '@/types/search';
import { SeminarPreviewList } from '@/types/seminar';

import { TreeNode } from './helper/SearchSubNavbar';

type SectionContent = [
  about?: AboutSearchResult,
  notice?: NoticeSearchResult,
  news?: NewsSearchResult,
  seminar?: SeminarPreviewList,
  member?: MemberSearchResult,
  research?: ResearchSearchResult,
  admission?: AdmissionsSearchResult,
  academics?: AcademicsSearchResult,
];

// TOOD: 리팩터링
export default async function fetchContent(keyword: string, tag?: string[]) {
  const noTag = tag === undefined || tag.length === 0;

  // fetch
  const sectionContent: SectionContent = await Promise.all([
    isSectionVisible('소개', tag) ? searchAbout({ keyword, number: 3, amount: 200 }) : undefined,
    isSectionVisible('소식', tag) ? searchNotice({ keyword, number: 3, amount: 200 }) : undefined,
    isSectionVisible('소식', tag) ? searchNews({ keyword, number: 3, amount: 200 }) : undefined,
    isSectionVisible('소식', tag) ? getSeminarPosts({ keyword, pageNum: '1' }) : undefined,
    isSectionVisible('구성원', tag)
      ? searchMember({ keyword, number: 10, amount: 200 })
      : undefined,
    isSectionVisible('연구·교육', tag)
      ? searchResearch({ keyword, number: 3, amount: 200 })
      : undefined,
    isSectionVisible('입학', tag)
      ? searchAdmissions({ keyword, number: 3, amount: 200 })
      : undefined,
    isSectionVisible('학사 및 교과', tag)
      ? searchAcademics({ keyword, number: 3, amount: 200 })
      : undefined,
  ]);

  // 전체 개수 계산
  const total = sectionContent.reduce((prev, cur) => prev + (cur?.total ?? 0), 0);

  // 서브네비 구성
  const node: TreeNode[] = [];
  node.push({
    name: `전체`,
    size: tag === undefined || tag.length === 0 ? total : undefined,
    bold: noTag,
  });
  node.push({
    name: `소개`,
    size: sectionContent[0]?.total,
    bold: !noTag && sectionContent[0] !== undefined,
  });

  const noticeTotal = sectionContent[1]?.total;
  const newsTotal = sectionContent[2]?.total;
  const seminarTotal = sectionContent[3]?.total;
  const sectionTotal = noticeTotal && (noticeTotal ?? 0) + (newsTotal ?? 0) + (seminarTotal ?? 0);
  node.push({
    name: `소식`,
    size: sectionTotal,
    children: [
      { name: `공지사항`, size: noticeTotal },
      { name: `새 소식`, size: newsTotal },
      { name: `세미나`, size: seminarTotal },
    ],
    bold: !noTag && sectionContent[1] !== undefined,
  });

  node.push({
    name: `구성원`,
    size: sectionContent[4]?.total,
    bold: !noTag && sectionContent[4] !== undefined,
  });
  node.push({
    name: `연구·교육`,
    size: sectionContent[5]?.total,
    bold: !noTag && sectionContent[5] !== undefined,
  });
  node.push({
    name: `입학`,
    size: sectionContent[6]?.total,
    bold: !noTag && sectionContent[6] !== undefined,
  });
  node.push({
    name: `학사 및 교과`,
    size: sectionContent[7]?.total,
    bold: !noTag && sectionContent[7] !== undefined,
  });

  return { sectionContent, node, total };
}

const isSectionVisible = (
  sectionName: '소개' | '소식' | '구성원' | '연구·교육' | '입학' | '학사 및 교과',
  tagList?: string[],
) => tagList === undefined || tagList.length === 0 || tagList.includes(sectionName);
