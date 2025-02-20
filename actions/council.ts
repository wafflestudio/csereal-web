'use server';

import { revalidateTag } from 'next/cache';

import { putCouncilIntro } from '@/apis/v2/council/intro';
import {
  deleteCouncilMinute,
  postCouncilMinutesByYear,
  putCouncilMinute,
} from '@/apis/v2/council/meeting-minute';
import { FETCH_TAG_INTRO, FETCH_TAG_MINUTE } from '@/constants/network';
import { councilIntro, councilMinute } from '@/constants/segmentNode';
import { redirectKo } from '@/i18n/routing';
import { getPath } from '@/utils/page';

import { withErrorHandler } from './errorHandler';

/** 소개 */

const introPath = getPath(councilIntro);

export const putIntroAction = withErrorHandler(async (formData: FormData) => {
  await putCouncilIntro(formData);
  revalidateTag(FETCH_TAG_INTRO);
  redirectKo(introPath);
});

/** 회의록 */

const minutePath = getPath(councilMinute);

export const postMinutesByYearAction = withErrorHandler(
  async (year: number, formData: FormData) => {
    await postCouncilMinutesByYear(year, formData);
    revalidateTag(FETCH_TAG_MINUTE);
    redirectKo(minutePath);
  },
);

export const putMinuteAction = withErrorHandler(
  async (year: number, index: number, formData: FormData) => {
    await putCouncilMinute(year, index, formData);
    revalidateTag(FETCH_TAG_MINUTE);
    redirectKo(minutePath);
  },
);

export const deleteMinuteAction = withErrorHandler(async (year: number, index: number) => {
  await deleteCouncilMinute(year, index);
  revalidateTag(FETCH_TAG_MINUTE);
});
