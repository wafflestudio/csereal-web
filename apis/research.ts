import { Language, WithLanguage } from '@/types/language';
import {
  ResearchCenter,
  ResearchGroupList,
  ResearchLab,
  SimpleResearchLab,
  TopConferenceList,
} from '@/types/research';

import { deleteRequestV2, getRequest, getRequestV2, postRequestV2, putRequestV2 } from '.';

export const getResearchGroups = (language: Language) =>
  getRequest<ResearchGroupList>('/research/groups', { language });

export const getResearchCenters = (language: Language) =>
  getRequest<ResearchCenter[]>('/research/centers', { language });

/** 연구실 */

export const getResearchLab = (id: number) => getRequest<ResearchLab>(`/research/lab/${id}`);

export const getResearchLabs = (language: Language) =>
  getRequestV2<SimpleResearchLab[]>('/research/labs', { language });

export const postResearchLab = (formData: FormData) =>
  postRequestV2<WithLanguage<ResearchLab>>('/research', { body: formData, jsessionID: true });

export const putResearchLab = (ids: WithLanguage<number>, formData: FormData) =>
  putRequestV2<WithLanguage<ResearchLab>>(`/research/${ids.ko}/${ids.en}`, {
    body: formData,
    jsessionID: true,
  });

export const deleteResearchLab = (ids: WithLanguage<number>) =>
  deleteRequestV2(`/research/${ids.ko}/${ids.en}`, { jsessionID: true });

export const getTopConferenceList = () => getRequest<TopConferenceList>('/conference/page');
