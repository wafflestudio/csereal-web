'use server';

import { revalidateTag } from 'next/cache';

import { putCouncilIntro } from '@/apis/v2/council/intro';
import { FETCH_TAG_INTRO } from '@/constants/network';
import { councilIntro } from '@/constants/segmentNode';
import { redirectKo } from '@/i18n/routing';
import { getPath } from '@/utils/page';

import { withErrorHandler } from './errorHandler';

const introPath = getPath(councilIntro);

export const putIntroAction = withErrorHandler(async (formData: FormData) => {
  await putCouncilIntro(formData);
  revalidateTag(FETCH_TAG_INTRO);
  redirectKo(introPath);
});
