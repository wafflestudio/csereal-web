'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { postResearchGroup } from '@/apis/research';
import { FETCH_TAG_GROUP } from '@/constants/network';
import { getPath } from '@/utils/page';
import { researchGroups } from '@/utils/segmentNode';

import { withErrorHandler } from './errorHandler';

const groupPath = getPath(researchGroups);

export const postResearchGroupAction = withErrorHandler(async (formData: FormData) => {
  await postResearchGroup(formData);
  revalidateTag(FETCH_TAG_GROUP);
  redirect(groupPath);
});

export const deleteResearchGroupAction = withErrorHandler(async () => {
  revalidateTag(FETCH_TAG_GROUP);
  redirect(groupPath);
});
