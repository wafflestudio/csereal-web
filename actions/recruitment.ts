'use server';

import { revalidateTag } from 'next/cache';

import { putFacultyRecruitment } from '@/apis/v1/recruit';
import { FETCH_TAG_RECRUITMENT } from '@/constants/network';
import { redirect } from '@/i18n/routing';
import { getPath } from '@/utils/page';
import { facultyRecruitment } from '@/constants/segmentNode';

import { withErrorHandler } from './errorHandler';

const recruitPath = getPath(facultyRecruitment);

export const putFacultyRecruitmentAction = withErrorHandler(async (formData: FormData) => {
  await putFacultyRecruitment(formData);
  revalidateTag(FETCH_TAG_RECRUITMENT);
  // TODO: 현재 locale로 redirect
  redirect({ href: recruitPath, locale: 'ko' });
});
