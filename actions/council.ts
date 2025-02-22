'use server';

import { revalidateTag } from 'next/cache';

import { putCouncilIntro } from '@/apis/v2/council/intro';
import { postCouncilReport } from '@/apis/v2/council/report';
import { FETCH_TAG_COUNCIL_INTRO, FETCH_TAG_COUNCIL_REPORT } from '@/constants/network';
import { councilIntro, councilReport } from '@/constants/segmentNode';
import { redirectKo } from '@/i18n/routing';
import { getPath } from '@/utils/page';

import { withErrorHandler } from './errorHandler';

const introPath = getPath(councilIntro);

export const putIntroAction = withErrorHandler(async (formData: FormData) => {
  await putCouncilIntro(formData);
  revalidateTag(FETCH_TAG_COUNCIL_INTRO);
  redirectKo(introPath);
});

const councilReportPath = getPath(councilReport);

export const postCouncilReportAction = withErrorHandler(async (formData: FormData) => {
  await postCouncilReport(formData);
  revalidateTag(FETCH_TAG_COUNCIL_REPORT);
  redirectKo(councilReportPath);
});
