import {
  ResearchCenter,
  ResearchGroups,
  ResearchLabInfo,
  TopConferenceList,
} from '@/types/research';

import { researchCentersData, researchGroupsData, researchLabInfos, tcl } from './objects';

export const getMockResearchGroups = async (): Promise<ResearchGroups> => researchGroupsData;

export const getMockResearchCenters = async (): Promise<ResearchCenter[]> => researchCentersData;

export const getMockTopConferenceList = async (): Promise<TopConferenceList> => tcl;

export const getMockResearchLabs = async (): Promise<ResearchLabInfo[]> => researchLabInfos;
