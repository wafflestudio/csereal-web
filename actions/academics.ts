'use server';

import { revalidateTag } from 'next/cache';

import { putCurriculum } from '@/apis/academics';

import { FETCH_TAG_CURRICULUM } from '@/constants/network';

import { withErrorHandler } from './errorHandler';

export const putCurriculumAction = withErrorHandler(
  async (data: { year: number; description: string }) => {
    await putCurriculum(data);
    revalidateTag(FETCH_TAG_CURRICULUM);
  },
);
