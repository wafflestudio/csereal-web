'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { deleteClub, postClub, putClub } from '@/apis/about';
import { FETCH_TAG_CLUB } from '@/constants/network';
import { getPath } from '@/utils/page';
import { studentClubs } from '@/utils/segmentNode';

import { withErrorHandler } from './errorHandler';

/** 동아리 */

const clubPath = getPath(studentClubs);

export const postClubAction = withErrorHandler(async (formData: FormData) => {
  await postClub(formData);
  revalidateTag(FETCH_TAG_CLUB);
  redirect(clubPath);
});

export const putClubAction = withErrorHandler(async (formData: FormData) => {
  await putClub(formData);
  revalidateTag(FETCH_TAG_CLUB);
  redirect(clubPath);
});

export const deleteClubAction = withErrorHandler(async (id: number) => {
  await deleteClub(id);
  revalidateTag(FETCH_TAG_CLUB);
  redirect(clubPath);
});
