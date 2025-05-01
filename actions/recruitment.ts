'use server';

import { revalidateTag } from 'next/cache';

import { withErrorHandler } from '@/actions/errorHandler';
import { putFacultyRecruitment } from '@/apis/v2/recruit';
import { FETCH_TAG_RECRUITMENT } from '@/constants/network';
import { facultyRecruitment } from '@/constants/segmentNode';
import { redirect } from '@/i18n/routing';
import { getPath } from '@/utils/page';

const recruitPath = getPath(facultyRecruitment);

export const putFacultyRecruitmentAction = withErrorHandler(async (formData: FormData) => {
  await putFacultyRecruitment(formData);
  revalidateTag(FETCH_TAG_RECRUITMENT);
  // TODO: 현재 locale로 redirect
  redirect({ href: recruitPath, locale: 'ko' });
});
