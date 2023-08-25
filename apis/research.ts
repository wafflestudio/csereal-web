import { centersMock, getMockResearchGroups, groupMock, lab, lab2 } from '@/data/research';

import { ResearchCenter, ResearchGroups, ResearchLab, ResearchLabInfo } from '@/types/research';

import { getRequest } from '.';

// export const getResearchGroups = () => getRequest('/research/groups') as Promise<ResearchGroups>;

// export const getResearchCenters = () =>
//   getRequest('/research/centers') as Promise<ResearchCenter[]>;

// export const getResearchLabs = () => getRequest('/research/labs') as Promise<ResearchLabInfo[]>;

// export const getResearchLab = (labId: number) =>
//   getRequest(`/research/lab/${labId}`) as Promise<ResearchLab>;

export const getResearchLabs = async () => [
  ...Array(10)
    .fill(0)
    .map(() => lab),
  ...Array(10)
    .fill(0)
    .map(() => lab2),
];

export const getResearchLab = async (labId: number): Promise<ResearchLab> => ({
  id: 5,
  name: '데이터 마이닝 연구실',
  professors: [{ id: 1, name: '강유' }],
  location: '301동 551-1호 / 551-2호 / 554-1호 / 516호',
  tel: '(02) 880-1860',
  acronym: 'QUIQCL',
  introductionMaterials: { pdf: '/', youtube: 'youtubelink' },
  description:
    '세계가 주목하는 컴퓨터공학부의 많은 교수들은 ACM, IEEE 등 세계적인 컴퓨터 관련 주요 학회에서 국제 학술지 편집위원, 국제학술회의 위원장, 기조연성자 등으로 활발하게 활동하고 있습니다. 정부 지원과제, 민간 산업체 지원 연구과제 등도 성공적으로 수행, 우수한 성과들을 내놓고 있으며, 오늘도 인류가 꿈꾸는 행복하고 편리한 세상을 위해 변화와 혁신, 연구와 도전을 계속하고 있습니다. 세계가 주목하는 컴퓨터공학부의 많은 교수들은 ACM, IEEE 등 세계적인 컴퓨터 관련 주요 학회에서 국제 학술지 편집위원, 국제학술회의 위원장, 기조연성자 등으로 활발하게 활동하고 있습니다. 정부 지원과제, 민간 산업체 지원 연구과제 등도 성공적으로 수행, 우수한 성과들을 내놓고 있으며, 오늘도 인류가 꿈꾸는 행복하고 편리한 세상을 위해 변화와 혁신, 연구와 도전을 계속하고 있습니다. 세계가 주목하는 컴퓨터공학부의 많은 교수들은 ACM, IEEE 등 세계적인 컴퓨터 관련 주요 학회에서 국제 학술지 편집위원, 국제학술회의 위원장, 기조연성자 등으로 활발하게 활동하고 있습니다. 정부 지원과제, 민간 산업체 지원 연구과제 등도 성공적으로 수행, 우수한 성과들을 내놓고 있으며, 오늘도 인류가 꿈꾸는 행복하고 편리한 세상을 위해 변화와 혁신, 연구와 도전을 계속하고 있습니다.',
  websiteURL: '/',
  group: '그래픽스 및 사람 중심 컴퓨팅',
});

export const getResearchGroups = getMockResearchGroups;

export const getResearchCenters = async (): Promise<ResearchCenter[]> => {
  return centersMock;
};
