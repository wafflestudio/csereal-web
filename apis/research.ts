import { FETCH_TAG_GROUP } from '@/constants/network';
import { Language, WithLanguage } from '@/types/language';
import {
  ResearchCenter,
  ResearchGroup,
  ResearchLab,
  SimpleResearchLab,
  TopConferenceList,
} from '@/types/research';

import { deleteRequestV2, getRequest, getRequestV2, postRequestV2, putRequestV2 } from '.';

/** 연구 그룹 (스트림) */

export const getResearchGroups = (language: Language) =>
  getRequestV2<ResearchGroup[]>(
    '/research/groups',
    { language },
    { next: { tags: [FETCH_TAG_GROUP] } },
  );

export const getResearchGroup = (id: number) =>
  getRequestV2<WithLanguage<ResearchGroup>>(`/research/${id}`, undefined, {
    next: { tags: [FETCH_TAG_GROUP] },
  });

export const postResearchGroup = (formData: FormData) =>
  postRequestV2<WithLanguage<ResearchGroup>>('/research', { body: formData, jsessionID: true });

export const putResearchGroup = (ids: WithLanguage<number>, formData: FormData) =>
  putRequestV2<WithLanguage<ResearchGroup>>(`/research/${ids.ko}/${ids.en}`, {
    body: formData,
    jsessionID: true,
  });

export const deleteResearchGroup = (ids: WithLanguage<number>) =>
  deleteRequestV2(`/research/${ids.ko}/${ids.en}`, { jsessionID: true });

export const getResearchCenters = (language: Language) =>
  getRequest<ResearchCenter[]>('/research/centers', { language });

export const getResearchLab = (id: number) => getRequest<ResearchLab>(`/research/lab/${id}`);

export const getResearchLabs = (language: Language) =>
  getRequestV2<SimpleResearchLab[]>('/research/labs', { language });

export const getTopConferenceList = () => getRequest<TopConferenceList>('/conference/page');
