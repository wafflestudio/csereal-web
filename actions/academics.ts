'use server';

import { revalidateTag } from 'next/cache';

import {
  deleteCurriculum,
  deleteGeneralStudies,
  postCurriculum,
  postGeneralStudies,
  putAcademicsGuide,
  putCurriculum,
  putDegreeRequirements,
  putGeneralStudies,
} from '@/apis/academics';

import {
  FETCH_TAG_CURRICULUM,
  FETCH_TAG_DEGREE,
  FETCH_TAG_GENERAL_STUDIES,
  FETCH_TAG_GUIDE,
} from '@/constants/network';

import { Curriculum, GeneralStudiesRequirement, StudentType } from '@/types/academics';

import { withErrorHandler } from './errorHandler';

export const putGuideAction = withErrorHandler(async (type: StudentType, formData: FormData) => {
  await putAcademicsGuide(type, formData);
  revalidateTag(FETCH_TAG_GUIDE);
});

export const putDegreeRequirementsAction = withErrorHandler(async (formData: FormData) => {
  await putDegreeRequirements(formData);
  revalidateTag(FETCH_TAG_DEGREE);
});

/** 전공 이수 표준 형태 */
export const postCurriculumAction = withErrorHandler(async (data: Curriculum) => {
  await postCurriculum(data);
  revalidateTag(FETCH_TAG_CURRICULUM);
});

export const putCurriculumAction = withErrorHandler(async (data: Curriculum) => {
  await putCurriculum(data);
  revalidateTag(FETCH_TAG_CURRICULUM);
});

export const deleteCurriculumAction = withErrorHandler(async (year: number) => {
  await deleteCurriculum(year);
  revalidateTag(FETCH_TAG_CURRICULUM);
});

/** 필수 교양 과목 */
export const postGeneralStudiesAction = withErrorHandler(
  async (data: GeneralStudiesRequirement) => {
    await postGeneralStudies(data);
    revalidateTag(FETCH_TAG_GENERAL_STUDIES);
  },
);

export const putGeneralStudiesAction = withErrorHandler(async (data: GeneralStudiesRequirement) => {
  await putGeneralStudies(data);
  revalidateTag(FETCH_TAG_GENERAL_STUDIES);
});

export const deleteGeneralStudiesAction = withErrorHandler(async (year: number) => {
  await deleteGeneralStudies(year);
  revalidateTag(FETCH_TAG_GENERAL_STUDIES);
});
