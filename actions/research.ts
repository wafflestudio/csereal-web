'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import {
  deleteResearchCenter,
  deleteResearchGroup,
  postResearchCenter,
  postResearchGroup,
  putResearchCenter,
  putResearchGroup,
} from '@/apis/research';
import { FETCH_TAG_CENTER, FETCH_TAG_GROUP } from '@/constants/network';
import { WithLanguage } from '@/types/language';
import { getPath } from '@/utils/page';
import { researchCenters, researchGroups } from '@/utils/segmentNode';

import { withErrorHandler } from './errorHandler';

const groupPath = getPath(researchGroups);
const centerPath = getPath(researchCenters);

/** 연구 그룹 (스트림) */
export const postResearchGroupAction = withErrorHandler(async (formData: FormData) => {
  await postResearchGroup(formData);
  revalidateTag(FETCH_TAG_GROUP);
  redirect(groupPath);
});

export const putResearchGroupAction = withErrorHandler(
  async (ids: WithLanguage<number>, formData: FormData) => {
    await putResearchGroup(ids, formData);
    revalidateTag(FETCH_TAG_GROUP);
    redirect(groupPath);
  },
);

export const deleteResearchGroupAction = withErrorHandler(
  async (ids: { ko: number; en: number }) => {
    await deleteResearchGroup(ids);
    revalidateTag(FETCH_TAG_GROUP);
    redirect(groupPath);
  },
);

/** 연구 센터 */

export const postResearchCenterAction = withErrorHandler(async (formData: FormData) => {
  await postResearchCenter(formData);
  revalidateTag(FETCH_TAG_CENTER);
  redirect(centerPath);
});

export const putResearchCenterAction = withErrorHandler(
  async (ids: WithLanguage<number>, formData: FormData) => {
    await putResearchCenter(ids, formData);
    revalidateTag(FETCH_TAG_CENTER);
    redirect(centerPath);
  },
);

export const deleteResearchCenterAction = withErrorHandler(
  async (ids: { ko: number; en: number }) => {
    await deleteResearchCenter(ids);
    revalidateTag(FETCH_TAG_CENTER);
    redirect(centerPath);
  },
);
