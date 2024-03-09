import { ResearchLab, SimpleResearchLab, TopConferenceList } from '@/types/research';

import { simpleResearchLabs, tcl } from './objects';
import { researchLabs } from './serverObjects';

export const getMockTopConferenceList = async (): Promise<TopConferenceList> => tcl;

export const getMockSimpleResearchLabs = async (): Promise<SimpleResearchLab[]> =>
  simpleResearchLabs;

export const getMockResearchLab = async (id: number): Promise<ResearchLab> => researchLabs[id];
