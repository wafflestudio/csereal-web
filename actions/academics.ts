'use server';

import { revalidateTag } from 'next/cache';

import { putAcademicsGuide, putDegreeRequirements } from '@/apis/academics';

import { FETCH_TAG_DEGREE, FETCH_TAG_GUIDE } from '@/constants/network';

import { StudentType } from '@/types/academics';

import { withErrorHandler } from './errorHandler';

export const putGuideAction = withErrorHandler(async (type: StudentType, formData: FormData) => {
  await putAcademicsGuide(type, formData);
  revalidateTag(FETCH_TAG_GUIDE);
});

export const putDegreeRequirementsAction = withErrorHandler(async (formData: FormData) => {
  await putDegreeRequirements(formData);
  revalidateTag(FETCH_TAG_DEGREE);
});
