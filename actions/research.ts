'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { deleteResearchLab, postResearchLab, putResearchLab } from '@/apis/research';
import { FETCH_TAG_LAB } from '@/constants/network';
import { WithLanguage } from '@/types/language';
import { getPath } from '@/utils/page';
import { researchLabs } from '@/utils/segmentNode';

import { withErrorHandler } from './errorHandler';

const labsPath = getPath(researchLabs);

/** 연구실 */

export const postResearchGroupAction = withErrorHandler(async (formData: FormData) => {
  await postResearchLab(formData);
  revalidateTag(FETCH_TAG_LAB);
  redirect(labsPath);
});

export const putResearchLabAction = withErrorHandler(
  async (ids: WithLanguage<number>, formData: FormData) => {
    await putResearchLab(ids, formData);
    revalidateTag(FETCH_TAG_LAB);
    redirect(labsPath);
  },
);

export const deleteResearchLabAction = withErrorHandler(async (ids: { ko: number; en: number }) => {
  await deleteResearchLab(ids);
  revalidateTag(FETCH_TAG_LAB);
  redirect(labsPath);
});
