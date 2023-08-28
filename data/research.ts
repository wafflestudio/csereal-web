import {
  ResearchCenter,
  ResearchGroups,
  ResearchLab,
  SimpleResearchLab,
  TopConferenceList,
} from '@/types/research';

import {
  researchCentersData,
  researchGroupsData,
  simpleResearchLabs,
  researchLabs,
  tcl,
} from './objects';

export const getMockResearchGroups = async (): Promise<ResearchGroups> => researchGroupsData;

export const getMockResearchCenters = async (): Promise<ResearchCenter[]> => researchCentersData;

export const getMockTopConferenceList = async (): Promise<TopConferenceList> => tcl;

export const getMockSimpleResearchLabs = async (): Promise<SimpleResearchLab[]> =>
  simpleResearchLabs;

export const getMockResearchLab = async (id: number): Promise<ResearchLab> => researchLabs[id];
