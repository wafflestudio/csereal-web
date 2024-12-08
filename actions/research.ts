'use server';

import { revalidateTag } from 'next/cache';

import { postResearchCenter, postResearchGroup } from '@/apis/v2/research';
import {
  deleteResearchCenter,
  deleteResearchGroup,
  putResearchCenter,
  putResearchGroup,
} from '@/apis/v2/research/[id_ko]/[id_en]';
import { postResearchLab } from '@/apis/v2/research/lab';
import { deleteResearchLab, putResearchLab } from '@/apis/v2/research/lab/[id_ko]/[id_en]';
import { FETCH_TAG_CENTER, FETCH_TAG_GROUP, FETCH_TAG_LAB } from '@/constants/network';
import { redirectKo } from '@/i18n/routing';
import { WithLanguage } from '@/types/language';
import { getPath } from '@/utils/page';
import { researchCenters, researchGroups, researchLabs } from '@/constants/segmentNode';
import { decodeFormDataFileName } from '@/utils/string';

import { withErrorHandler } from './errorHandler';

const groupPath = getPath(researchGroups);
const centerPath = getPath(researchCenters);
const labsPath = getPath(researchLabs);

/** 연구 그룹 (스트림) */

export const postResearchGroupAction = withErrorHandler(async (formData: FormData) => {
  await postResearchGroup(formData);
  revalidateTag(FETCH_TAG_GROUP);
  redirectKo(groupPath);
});

export const putResearchGroupAction = withErrorHandler(
  async (ids: WithLanguage<number>, formData: FormData) => {
    await putResearchGroup(ids, formData);
    revalidateTag(FETCH_TAG_GROUP);
    redirectKo(groupPath);
  },
);

export const deleteResearchGroupAction = withErrorHandler(
  async (ids: { ko: number; en: number }) => {
    await deleteResearchGroup(ids);
    revalidateTag(FETCH_TAG_GROUP);
    redirectKo(groupPath);
  },
);

/** 연구 센터 */

export const postResearchCenterAction = withErrorHandler(async (formData: FormData) => {
  await postResearchCenter(formData);
  revalidateTag(FETCH_TAG_CENTER);
  redirectKo(centerPath);
});

export const putResearchCenterAction = withErrorHandler(
  async (ids: WithLanguage<number>, formData: FormData) => {
    await putResearchCenter(ids, formData);
    revalidateTag(FETCH_TAG_CENTER);
    redirectKo(centerPath);
  },
);

export const deleteResearchCenterAction = withErrorHandler(
  async (ids: { ko: number; en: number }) => {
    await deleteResearchCenter(ids);
    revalidateTag(FETCH_TAG_CENTER);
    redirectKo(centerPath);
  },
);

/** 연구실 */

export const postResearchLabAction = withErrorHandler(async (formData: FormData) => {
  decodeFormDataFileName(formData, 'pdf');
  await postResearchLab(formData);
  revalidateTag(FETCH_TAG_LAB);
  redirectKo(labsPath);
});

export const putResearchLabAction = withErrorHandler(
  async (ids: WithLanguage<number>, formData: FormData) => {
    decodeFormDataFileName(formData, 'pdf');
    await putResearchLab(ids, formData);
    revalidateTag(FETCH_TAG_LAB);
    redirectKo(labsPath);
  },
);

export const deleteResearchLabAction = withErrorHandler(async (ids: { ko: number; en: number }) => {
  await deleteResearchLab(ids);
  revalidateTag(FETCH_TAG_LAB);
  redirectKo(labsPath);
});
