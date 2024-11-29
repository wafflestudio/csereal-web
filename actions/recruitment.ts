'use server';

import { revalidateTag } from 'next/cache';

import { putFacultyRecruitment } from '@/apis/v1/recruit';
import { FETCH_TAG_RECRUITMENT } from '@/constants/network';
import { redirect } from '@/navigation';
import { getPath } from '@/utils/page';
import { facultyRecruitment } from '@/utils/segmentNode';

import { withErrorHandler } from './errorHandler';

const recruitPath = getPath(facultyRecruitment);

export const putFacultyRecruitmentAction = withErrorHandler(async (formData: FormData) => {
  await putFacultyRecruitment(formData);
  revalidateTag(FETCH_TAG_RECRUITMENT);
  redirect(recruitPath);
});
