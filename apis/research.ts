import { FETCH_TAG_CENTER, FETCH_TAG_GROUP } from '@/constants/network';
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

/** 연구 센터 */

export const getResearchCenters = (language: Language) =>
  getRequestV2<ResearchCenter[]>(
    '/research/centers',
    { language },
    { next: { tags: [FETCH_TAG_CENTER] } },
  );

export const getResearchCenter = (id: number) =>
  getRequestV2<WithLanguage<ResearchCenter>>(`/research/${id}`, undefined, {
    next: { tags: [FETCH_TAG_CENTER] },
  });

// 연구 그룹과 동일하나 개발 시 가독성을 위해 분리해둠 (GET은 분리되고 나머지는 통일하면 더 헷갈릴 듯하여)
export const postResearchCenter = (formData: FormData) =>
  postRequestV2<WithLanguage<ResearchCenter>>('/research', { body: formData, jsessionID: true });

export const putResearchCenter = (ids: WithLanguage<number>, formData: FormData) =>
  putRequestV2<WithLanguage<ResearchCenter>>(`/research/${ids.ko}/${ids.en}`, {
    body: formData,
    jsessionID: true,
  });

export const deleteResearchCenter = (ids: WithLanguage<number>) =>
  deleteRequestV2(`/research/${ids.ko}/${ids.en}`, { jsessionID: true });

/** 연구실 */

export const getResearchLab = (id: number) => getRequest<ResearchLab>(`/research/lab/${id}`);

export const getResearchLabs = (language: Language) =>
  getRequestV2<SimpleResearchLab[]>('/research/labs', { language });

/** TCL */

export const getTopConferenceList = () => getRequest<TopConferenceList>('/conference/page');
