import {
  ResearchCenter,
  ResearchGroupList,
  ResearchLab,
  SimpleResearchLab,
  TopConferenceList,
} from '@/types/research';

import { getRequest } from '.';

export const getResearchGroups = (locale: 'ko' | 'en') =>
  getRequest<ResearchGroupList>('/research/groups', { language: locale });

export const getResearchCenters = (locale: 'ko' | 'en') =>
  getRequest<ResearchCenter[]>('/research/centers', { language: locale });

export const getResearchLab = (id: number) => getRequest<ResearchLab>(`/research/lab/${id}`);

export const getResearchLabs = () => getRequest<SimpleResearchLab[]>('/research/labs');

export const getTopConferenceList = () => getRequest<TopConferenceList>('/conference/page');
