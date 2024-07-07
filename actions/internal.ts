'use server';

import { revalidateTag } from 'next/cache';

import { putInternal } from '@/apis/internal';

import { FETCH_TAG_INTERNAL } from '@/constants/network';

import { withErrorHandler } from './errorHandler';

export const putInternalAction = withErrorHandler(async (description: string) => {
  await putInternal(description);
  revalidateTag(FETCH_TAG_INTERNAL);
});
