import { Language } from '@/types/language';
import {
  ResearchCenter,
  ResearchGroupList,
  ResearchLab,
  SimpleResearchLab,
  TopConferenceList,
} from '@/types/research';

import { getRequest } from '.';

export const getResearchGroups = (language: Language) =>
  getRequest<ResearchGroupList>('/research/groups', { language });

export const getResearchCenters = (language: Language) =>
  getRequest<ResearchCenter[]>('/research/centers', { language });

export const getResearchLab = (id: number) => getRequest<ResearchLab>(`/research/lab/${id}`);

export const getResearchLabs = (language: Language) =>
  getRequest<SimpleResearchLab[]>('/research/labs', { language });

export const getTopConferenceList = () => getRequest<TopConferenceList>('/conference/page');
