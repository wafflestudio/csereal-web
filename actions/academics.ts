'use server';

import { revalidateTag } from 'next/cache';

import {
  postCurriculum,
  putAcademicsGuide,
  putCurriculum,
  putDegreeRequirements,
} from '@/apis/academics';

import { FETCH_TAG_CURRICULUM, FETCH_TAG_DEGREE, FETCH_TAG_GUIDE } from '@/constants/network';

import { Curriculum, StudentType } from '@/types/academics';

import { withErrorHandler } from './errorHandler';

export const putGuideAction = withErrorHandler(async (type: StudentType, formData: FormData) => {
  await putAcademicsGuide(type, formData);
  revalidateTag(FETCH_TAG_GUIDE);
});

export const putDegreeRequirementsAction = withErrorHandler(async (formData: FormData) => {
  await putDegreeRequirements(formData);
  revalidateTag(FETCH_TAG_DEGREE);
});

export const postCurriculumAction = withErrorHandler(async (data: Curriculum) => {
  await postCurriculum(data);
  revalidateTag(FETCH_TAG_CURRICULUM);
});

export const putCurriculumAction = withErrorHandler(async (data: Curriculum) => {
  await putCurriculum(data);
  revalidateTag(FETCH_TAG_CURRICULUM);
});
