import {
  ResearchCenter,
  ResearchGroups,
  ResearchLabInfo,
  TopConferenceList,
} from '@/types/research';

import { researchCentersData, researchGroupsData, tcl } from './objects';

export const getMockResearchGroups = async (): Promise<ResearchGroups> => researchGroupsData;

export const getMockResearchCenters = async (): Promise<ResearchCenter[]> => researchCentersData;

export const getMockTopConferenceList = async (): Promise<TopConferenceList> => tcl;

export const lab: ResearchLabInfo = {
  id: 1,
  name: '컴퓨터 그래픽스 및 이미지 처리 연구실',
  professors: [
    { id: 1, name: '신영길' },
    { id: 2, name: '김보형' },
  ],
  location: '301동 551-1호 / 551-2호 / 554-1호 / 516호',
  tel: '(02) 880-1860',
  acronym: 'QUIQCL',
  introductionMaterials: {
    pdf: 'https://picsum.photos/801',
    youtube: 'https://youtu.be/LCQrNawLymE',
  },
};

export const lab2: ResearchLabInfo = {
  id: 4,
  name: '데이터 마이닝 연구실',
  professors: [{ id: 3, name: '강유' }],
  location: '301동 551-1호 / 551-2호 / 554-1호 / 516호',
  tel: '(02) 880-1860',
  acronym: 'QUIQCL',
  introductionMaterials: { pdf: '/', youtube: 'https://youtu.be/3B2msqtwfCc' },
};
