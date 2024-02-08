import {
  SegmentNode,
  overview,
  faculty,
  undergraduateGuide,
  graduateGuide,
  notice,
  seminar,
  facultyRecruitment,
  researchLabs,
  topConferenceList,
  reservationIntroduction,
  tentenProposal,
  contact,
  directions,
} from '@/types/page';

import { getPath } from '@/utils/page';

export interface FooterLink {
  href: string;
  title: string;
}

const segmentNodeToLink = (node: SegmentNode): FooterLink => ({
  href: getPath(node),
  title: node.name,
});

export const aboutLinks = [overview, faculty, undergraduateGuide, graduateGuide].map(
  segmentNodeToLink,
);

export const resourcesLinks = [notice, seminar, reservationIntroduction].map(segmentNodeToLink);

export const researchLinks = [
  segmentNodeToLink(facultyRecruitment),
  {
    href: getPath(researchLabs),
    title: '연구실 목록',
  },
  segmentNodeToLink(topConferenceList),
  {
    href: getPath(tentenProposal),
    title: '10-10 Project',
  },
];

export const moreLinks: FooterLink[] = [
  {
    title: '연합전공 인공지능(학사)',
    href: 'https://imai.snu.ac.kr',
  },
  {
    title: '지능형컴퓨팅사업단',
    href: 'http://bkcse.snu.ac.kr',
  },
  {
    title: '컴퓨터 연구소',
    href: 'http://ict.snu.ac.kr',
  },
  {
    title: '해동학술정보실',
    href: 'http://haedong.snu.ac.kr/',
  },
];

// TODO: 개인정보처리방침 링크
export const privacyPath = '/404';

export const contactPath = getPath(contact);

export const directionsPath = getPath(directions);

export const snucseFacebookLink = 'https://www.facebook.com/groups/snucsegroup/';

export const snucomLink = 'http://www.snucom.org/';

export const snuEngLink = 'http://eng.snu.ac.kr/';

export const snuLink = 'https://www.snu.ac.kr/snunow/pr/videos';
