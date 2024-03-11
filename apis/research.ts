import {
  ResearchCenter,
  ResearchGroupList,
  ResearchLab,
  SimpleResearchLab,
  TopConferenceList,
} from '@/types/research';

import { getRequest } from '.';

export const getResearchGroups = () => getRequest<ResearchGroupList>('/research/groups');

export const getResearchCenters = () => getRequest<ResearchCenter[]>('/research/centers');

export const getResearchLab = (id: number) => getRequest<ResearchLab>(`/research/lab/${id}`);

export const getResearchLabs = () => getRequest<SimpleResearchLab[]>('/research/labs');

export const getTopConferenceList = () => getRequest<TopConferenceList>('/conference');
