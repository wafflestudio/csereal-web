import {
  getMockResearchCenters,
  getMockResearchGroups,
  getMockResearchLab,
  getMockSimpleResearchLabs,
  getMockTopConferenceList,
} from '@/data/research';

import {
  ResearchCenter,
  ResearchGroups,
  ResearchLab,
  SimpleResearchLab,
  TopConferenceList,
} from '@/types/research';

import { getRequest } from '.';

export const getResearchGroups = getMockResearchGroups;

export const getResearchCenters = getMockResearchCenters;

// export const getResearchGroups = () => getRequest('/research/groups') as Promise<ResearchGroups>;

// export const getResearchCenters = () =>
//   getRequest('/research/centers') as Promise<ResearchCenter[]>;

// export const getResearchLabs = () => getRequest('/research/labs') as Promise<ResearchLabInfo[]>;

// export const getResearchLab = (labId: number) =>
//   getRequest(`/research/lab/${labId}`) as Promise<ResearchLab>;

export const getResearchLabs = getMockSimpleResearchLabs;

export const getResearchLab = getMockResearchLab;

export const getTopConferenceList = getMockTopConferenceList;
