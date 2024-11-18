'use server';

import { revalidateTag } from 'next/cache';

import { FETCH_TAG_RECRUITMENT } from '@/constants/network';
import { redirect } from '@/navigation';
import { getPath } from '@/utils/page';
import { facultyRecruitment } from '@/utils/segmentNode';

import { withErrorHandler } from './errorHandler';

const recruitPath = getPath(facultyRecruitment);

export const putFacultyRecruitmentAction = withErrorHandler(async (formData: FormData) => {
  await putFacultyRecruitmentAction(formData);
  revalidateTag(FETCH_TAG_RECRUITMENT);
  redirect(recruitPath);
});
