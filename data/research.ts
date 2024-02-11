import {
  ResearchCenter,
  ResearchGroups,
  ResearchLab,
  SimpleResearchLab,
  TopConferenceList,
} from '@/types/research';

import { researchCentersData, researchGroupsData, simpleResearchLabs, tcl } from './objects';
import { researchLabs } from './serverObjects';

export const getMockResearchDescription = async (): Promise<string> => {
  return '<p>세계가 주목하는 컴퓨터공학부의 많은 교수들은 ACM, IEEE 등 세계적인 컴퓨터관련 주요 학회에서 국제학술지 편집위원, 국제학술회의 위원장, 기조연설자 등으로 활발하게 활동하고 있습니다. 정부 지원과제, 민간 산업체 지원 연구과제 등도 성공적으로 수행, 우수한 성과들을 내놓고 있으며, 오늘도 인류가 꿈꾸는 행복하고 편리한 세상을 위해 변화와 혁신, 연구와 도전을 계속하고 있습니다.</p>';
};

export const getMockResearchGroups = async (): Promise<ResearchGroups> => researchGroupsData;

export const getMockResearchCenters = async (): Promise<ResearchCenter[]> => researchCentersData;

export const getMockTopConferenceList = async (): Promise<TopConferenceList> => tcl;

export const getMockSimpleResearchLabs = async (): Promise<SimpleResearchLab[]> =>
  simpleResearchLabs;

export const getMockResearchLab = async (id: number): Promise<ResearchLab> => researchLabs[id];
