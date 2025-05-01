'use server';

import { revalidateTag } from 'next/cache';

import { withErrorHandler } from '@/actions/errorHandler';
import { putAdmissions } from '@/apis/v2/admissions/[mainType]/[postType]';
import {
  FETCH_TAG_EARLY_ADMISSION,
  FETCH_TAG_EXCHANGE,
  FETCH_TAG_GRADUATE_ADMISSION,
  FETCH_TAG_INTERNATIONAL_GRADUATE,
  FETCH_TAG_INTERNATIONAL_SCHOLARSHIPS,
  FETCH_TAG_INTERNATIONAL_UNDERGRADUATE,
  FETCH_TAG_REGULAR_ADMISSION,
} from '@/constants/network';
import {
  exchangeVisitingProgram,
  graduateRegularAdmission,
  internationalGraduateAdmission,
  internationalScholarships,
  internationalUndergraduateAdmission,
  undergraduateEarlyAdmission,
  undergraduateRegularAdmission,
} from '@/constants/segmentNode';
import { redirectKo } from '@/i18n/routing';
import { WithLanguage } from '@/types/language';
import { getPath } from '@/utils/page';

/** 학부 입학 */

const undergraduateRegularAdmissionPath = getPath(undergraduateRegularAdmission);

export const putUndergraduateRegularAdmissionsAction = withErrorHandler(
  async (data: WithLanguage<string>) => {
    await putAdmissions('undergraduate', 'regular-admission', data);
    revalidateTag(FETCH_TAG_REGULAR_ADMISSION);
    redirectKo(undergraduateRegularAdmissionPath);
  },
);

const undergraduateEarlyAdmissionPath = getPath(undergraduateEarlyAdmission);

export const putUndergraduateEarlyAdmissionsAction = withErrorHandler(
  async (data: WithLanguage<string>) => {
    await putAdmissions('undergraduate', 'early-admission', data);
    revalidateTag(FETCH_TAG_EARLY_ADMISSION);
    redirectKo(undergraduateEarlyAdmissionPath);
  },
);

/** 대학원 입학 */

const graduateAdmissionPath = getPath(graduateRegularAdmission);

export const putGraduateAdmissionsAction = withErrorHandler(async (data: WithLanguage<string>) => {
  await putAdmissions('graduate', 'regular-admission', data);
  revalidateTag(FETCH_TAG_GRADUATE_ADMISSION);
  redirectKo(graduateAdmissionPath);
});

/** International */

const internationalUndergraduatePath = getPath(internationalUndergraduateAdmission);

export const putInternationalUndergraduateAction = withErrorHandler(
  async (data: WithLanguage<string>) => {
    await putAdmissions('international', 'undergraduate', data);
    revalidateTag(FETCH_TAG_INTERNATIONAL_UNDERGRADUATE);
    redirectKo(internationalUndergraduatePath);
  },
);

const internationalGraduatePath = getPath(internationalGraduateAdmission);

export const putInternationalGraduateAction = withErrorHandler(
  async (data: WithLanguage<string>) => {
    await putAdmissions('international', 'graduate', data);
    revalidateTag(FETCH_TAG_INTERNATIONAL_GRADUATE);
    redirectKo(internationalGraduatePath);
  },
);

const internationalExchangePath = getPath(exchangeVisitingProgram);

export const putInternationalExchangeAction = withErrorHandler(
  async (data: WithLanguage<string>) => {
    await putAdmissions('international', 'exchange-visiting', data);
    revalidateTag(FETCH_TAG_EXCHANGE);
    redirectKo(internationalExchangePath);
  },
);

const internationalScholarshipsPath = getPath(internationalScholarships);

export const putInternationalScholarshipsAction = withErrorHandler(
  async (data: WithLanguage<string>) => {
    await putAdmissions('international', 'scholarships', data);
    revalidateTag(FETCH_TAG_INTERNATIONAL_SCHOLARSHIPS);
    redirectKo(internationalScholarshipsPath);
  },
);
