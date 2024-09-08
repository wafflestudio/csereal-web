'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import {
  deleteResearchGroup,
  getResearchGroup,
  postResearchGroup,
  putResearchGroup,
} from '@/apis/research';
import { FETCH_TAG_GROUP } from '@/constants/network';
import { WithLanguage } from '@/types/language';
import { getPath } from '@/utils/page';
import { researchGroups } from '@/utils/segmentNode';

import { withErrorHandler } from './errorHandler';

const groupPath = getPath(researchGroups);

export const getResearchGroupAction = withErrorHandler(async (id: number) => {
  return await getResearchGroup(id);
});

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
