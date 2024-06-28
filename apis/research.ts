import { Locale } from '@/types/locale';
import {
  ResearchCenter,
  ResearchGroupList,
  ResearchLab,
  SimpleResearchLab,
  TopConferenceList,
} from '@/types/research';

import { getRequest } from '.';

export const getResearchGroups = (locale: Locale) =>
  getRequest<ResearchGroupList>('/research/groups', { language: locale });

export const getResearchCenters = (locale: Locale) =>
  getRequest<ResearchCenter[]>('/research/centers', { language: locale });

export const getResearchLab = (id: number) => getRequest<ResearchLab>(`/research/lab/${id}`);

export const getResearchLabs = (locale: Locale) =>
  getRequest<SimpleResearchLab[]>('/research/labs', { language: locale });

export const getTopConferenceList = () => getRequest<TopConferenceList>('/conference/page');
