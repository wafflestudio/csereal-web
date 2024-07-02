'use server';

import { revalidateTag } from 'next/cache';

import { putInternal } from '@/apis/internal';

import { FETCH_TAG_INTERNAL } from '@/constants/network';

export const putInternalAction = async (description: string) => {
  try {
    await putInternal(description);
  } catch (e) {
    return e;
  }

  revalidateTag(FETCH_TAG_INTERNAL);
};
