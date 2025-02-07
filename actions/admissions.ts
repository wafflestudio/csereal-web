'use server';

import { revalidateTag } from 'next/cache';

import { putAdmissions } from '@/apis/v2/admissions/[mainType]/[postType]';
import { FETCH_TAG_REGULAR_ADMISSON } from '@/constants/network';
import { undergraduateRegularAdmission } from '@/constants/segmentNode';
import { redirectKo } from '@/i18n/routing';
import { WithLanguage } from '@/types/language';
import { getPath } from '@/utils/page';

import { withErrorHandler } from './errorHandler';

const undergraduateRegularAdmissionPath = getPath(undergraduateRegularAdmission);

export const putUndergraduateRegularAdmissionsAction = withErrorHandler(
  async (data: WithLanguage<string>) => {
    await putAdmissions('undergraduate', 'regular-admission', data);
    revalidateTag(FETCH_TAG_REGULAR_ADMISSON);
    redirectKo(undergraduateRegularAdmissionPath);
  },
);
