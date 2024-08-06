'use server';

import { revalidateTag } from 'next/cache';

import { putAcademicsGuide } from '@/apis/academics';

import { FETCH_TAG_GUIDE } from '@/constants/network';

import { StudentType } from '@/types/academics';

import { withErrorHandler } from './errorHandler';

export const putGuideAction = withErrorHandler(async (type: StudentType, formData: FormData) => {
  await putAcademicsGuide(type, formData);
  revalidateTag(FETCH_TAG_GUIDE);
});
