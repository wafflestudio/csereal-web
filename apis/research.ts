import {
  getMockResearchCenters,
  getMockResearchLab,
  getMockSimpleResearchLabs,
  getMockTopConferenceList,
} from '@/data/research';

import { ResearchGroupList } from '@/types/research';

import { getRequest } from './network/server';

export const getResearchGroups = () => getRequest<ResearchGroupList>('/research/groups');

export const getResearchCenters = getMockResearchCenters;

export const getResearchLabs = getMockSimpleResearchLabs;

export const getResearchLab = getMockResearchLab;

export const getTopConferenceList = getMockTopConferenceList;
