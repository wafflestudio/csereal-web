'use server';

import { revalidateTag } from 'next/cache';

import { putCouncilIntro } from '@/apis/v2/council/intro';
import {
  deleteCouncilMinute,
  postCouncilMinutesByYear,
  putCouncilMinute,
} from '@/apis/v2/council/meeting-minute';
import { postCouncilReport } from '@/apis/v2/council/report';
import { deleteCouncilReport, putCouncilReport } from '@/apis/v2/council/report/[id]';
import {
  FETCH_TAG_COUNCIL_INTRO,
  FETCH_TAG_COUNCIL_MINUTE,
  FETCH_TAG_COUNCIL_REPORT,
} from '@/constants/network';
import { councilIntro, councilMinute, councilReportList } from '@/constants/segmentNode';
import { redirectKo } from '@/i18n/routing';
import { getPath } from '@/utils/page';
import { decodeFormDataFileName } from '@/utils/string';

import { withErrorHandler } from './errorHandler';

/** 소개 */

const introPath = getPath(councilIntro);

export const putIntroAction = withErrorHandler(async (formData: FormData) => {
  await putCouncilIntro(formData);
  revalidateTag(FETCH_TAG_COUNCIL_INTRO);
  redirectKo(introPath);
});

/** 회의록 */

const minutePath = getPath(councilMinute);

export const postMinutesByYearAction = withErrorHandler(
  async (year: number, formData: FormData) => {
    decodeFormDataFileName(formData, 'attachments');
    await postCouncilMinutesByYear(year, formData);
    revalidateTag(FETCH_TAG_COUNCIL_MINUTE);
    redirectKo(minutePath);
  },
);

export const putMinuteAction = withErrorHandler(
  async (year: number, index: number, formData: FormData) => {
    decodeFormDataFileName(formData, 'newAttachments');
    await putCouncilMinute(year, index, formData);
    revalidateTag(FETCH_TAG_COUNCIL_MINUTE);
    redirectKo(minutePath);
  },
);

export const deleteMinuteAction = withErrorHandler(async (year: number, index: number) => {
  await deleteCouncilMinute(year, index);
  revalidateTag(FETCH_TAG_COUNCIL_MINUTE);
});

/** 활동보고 */

const councilReportPath = getPath(councilReportList);

export const postCouncilReportAction = withErrorHandler(async (formData: FormData) => {
  await postCouncilReport(formData);
  revalidateTag(FETCH_TAG_COUNCIL_REPORT);
  redirectKo(councilReportPath);
});

export const putCouncilReportAction = withErrorHandler(async (id: number, formData: FormData) => {
  await putCouncilReport(id, formData);
  revalidateTag(FETCH_TAG_COUNCIL_REPORT);
  redirectKo(`${councilReportPath}/${id}`);
});

export const deleteCouncilReportAction = async (id: number) => {
  try {
    await deleteCouncilReport(id);
    revalidateTag(FETCH_TAG_COUNCIL_REPORT);
  } catch (error) {
    return { message: error instanceof Error ? error.message : '알 수 없는 에러: ' + error };
  }
  redirectKo(councilReportPath);
};
