import {
  ResearchCenter,
  ResearchGroups,
  ResearchLab,
  SimpleResearchLab,
  TopConferenceList,
} from '@/types/research';

import { researchCentersData, researchGroupsData, simpleResearchLabs, tcl } from './objects';
import { researchLabs } from './serverObjects';

export const getMockResearchGroups = async (): Promise<ResearchGroups> => researchGroupsData;

export const getMockResearchCenters = async (): Promise<ResearchCenter[]> => researchCentersData;

export const getMockTopConferenceList = async (): Promise<TopConferenceList> => tcl;

export const getMockSimpleResearchLabs = async (): Promise<SimpleResearchLab[]> =>
  simpleResearchLabs;

export const getMockResearchLab = async (id: number): Promise<ResearchLab> => researchLabs[id];
