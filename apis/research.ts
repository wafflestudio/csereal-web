import { FETCH_TAG_CENTER, FETCH_TAG_GROUP, FETCH_TAG_LAB } from '@/constants/network';
import { Language, WithLanguage } from '@/types/language';
import {
  ResearchCenter,
  ResearchGroup,
  ResearchLab,
  SimpleResearchLab,
  TopConferenceList,
} from '@/types/research';

import { deleteRequest, getRequest, postRequest, putRequest } from '.';

/** 연구 그룹 (스트림) */

export const getResearchGroups = (language: Language) =>
  getRequest<ResearchGroup[]>(
    '/v2/research/groups',
    { language },
    { next: { tags: [FETCH_TAG_GROUP] } },
  );

export const getResearchGroup = (id: number) =>
  getRequest<WithLanguage<ResearchGroup>>(`/v2/research/${id}`, undefined, {
    next: { tags: [FETCH_TAG_GROUP] },
  });

export const postResearchGroup = (formData: FormData) =>
  postRequest<WithLanguage<ResearchGroup>>('/v2/research', { body: formData, jsessionID: true });

export const putResearchGroup = (ids: WithLanguage<number>, formData: FormData) =>
  putRequest<WithLanguage<ResearchGroup>>(`/v2/research/${ids.ko}/${ids.en}`, {
    body: formData,
    jsessionID: true,
  });

export const deleteResearchGroup = (ids: WithLanguage<number>) =>
  deleteRequest(`/v2/research/${ids.ko}/${ids.en}`, { jsessionID: true });

/** 연구 센터 */

export const getResearchCenters = (language: Language) =>
  getRequest<ResearchCenter[]>(
    '/v2/research/centers',
    { language },
    { next: { tags: [FETCH_TAG_CENTER] } },
  );

export const getResearchCenter = (id: number) =>
  getRequest<WithLanguage<ResearchCenter>>(`/v2/research/${id}`, undefined, {
    next: { tags: [FETCH_TAG_CENTER] },
  });

// 연구 그룹과 동일하나 개발 시 가독성을 위해 분리해둠 (GET은 분리되고 나머지는 통일하면 더 헷갈릴 듯하여)
export const postResearchCenter = (formData: FormData) =>
  postRequest<WithLanguage<ResearchCenter>>('/v2/research', { body: formData, jsessionID: true });

export const putResearchCenter = (ids: WithLanguage<number>, formData: FormData) =>
  putRequest<WithLanguage<ResearchCenter>>(`/v2/research/${ids.ko}/${ids.en}`, {
    body: formData,
    jsessionID: true,
  });

export const deleteResearchCenter = (ids: WithLanguage<number>) =>
  deleteRequest(`/v2/research/${ids.ko}/${ids.en}`, { jsessionID: true });

/** 연구실 */

export const getResearchLab = (id: number) =>
  getRequest<WithLanguage<ResearchLab>>(`/v2/research/lab/${id}`, undefined, {
    next: { tags: [FETCH_TAG_LAB] },
  });

export const getResearchLabs = (language: Language) =>
  getRequest<SimpleResearchLab[]>(
    '/v2/research/lab',
    { language },
    { next: { tags: [FETCH_TAG_LAB] } },
  );

export const postResearchLab = (formData: FormData) =>
  postRequest<WithLanguage<ResearchLab>>('/v2/research/lab', { body: formData, jsessionID: true });

export const putResearchLab = (ids: WithLanguage<number>, formData: FormData) =>
  putRequest<WithLanguage<ResearchLab>>(`/v2/research/lab/${ids.ko}/${ids.en}`, {
    body: formData,
    jsessionID: true,
  });

export const deleteResearchLab = (ids: WithLanguage<number>) =>
  deleteRequest(`/v2/research/lab/${ids.ko}/${ids.en}`, { jsessionID: true });

/** TCL */

export const getTopConferenceList = () => getRequest<TopConferenceList>('/v1/conference/page');
