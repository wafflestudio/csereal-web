'use server';

import { revalidateTag } from 'next/cache';

import { redirect } from '@/navigation';

import {
  deleteScholarship,
  postScholarship,
  putAcademicsGuide,
  putDegreeRequirements,
  putScholarship,
  putScholarshipGuide,
} from '@/apis/academics';

import { FETCH_TAG_DEGREE, FETCH_TAG_GUIDE, FETCH_TAG_SCHOLARSHIP } from '@/constants/network';

import { StudentType } from '@/types/academics';

import { getPath } from '@/utils/page';
import { graduateScholarship, undergraduateScholarship } from '@/utils/segmentNode';

import { withErrorHandler } from './errorHandler';

export const putGuideAction = withErrorHandler(async (type: StudentType, formData: FormData) => {
  await putAcademicsGuide(type, formData);
  revalidateTag(FETCH_TAG_GUIDE);
});

export const putDegreeRequirementsAction = withErrorHandler(async (formData: FormData) => {
  await putDegreeRequirements(formData);
  revalidateTag(FETCH_TAG_DEGREE);
});

export const putScholarshipGuideAction = withErrorHandler(
  async (type: StudentType, description: string) => {
    await putScholarshipGuide(type, description);
    revalidateTag(FETCH_TAG_SCHOLARSHIP);
  },
);

const undergraduateScholarshipPath = getPath(undergraduateScholarship);
const graduateScholarshipPath = getPath(graduateScholarship);

export const postScholarshipAction = withErrorHandler(
  async (type: StudentType, data: { name: string; description: string }) => {
    const res = await postScholarship(type, data);
    revalidateTag(FETCH_TAG_SCHOLARSHIP);
    redirect(
      `${type === 'graduate' ? graduateScholarshipPath : undergraduateScholarshipPath}/${res.id}`,
    );
  },
);

export const putScholarshipAction = withErrorHandler(
  async (type: string, id: number, data: { name: string; description: string }) => {
    await putScholarship(id, data);
    revalidateTag(FETCH_TAG_SCHOLARSHIP);
    redirect(
      `${type === 'graduate' ? graduateScholarshipPath : undergraduateScholarshipPath}/${id}`,
    );
  },
);

export const deleteScholarshipAction = withErrorHandler(async (type: StudentType, id: number) => {
  await deleteScholarship(id);
  revalidateTag(FETCH_TAG_SCHOLARSHIP);
  redirect(type === 'graduate' ? graduateScholarshipPath : undergraduateScholarshipPath);
});
