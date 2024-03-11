'use server';

import { revalidateTag } from 'next/cache';

import { patchMultipleImportants, patchMultipleSlides } from '@/apis/admin';

import {
  FETCH_TAG_IMPORANT,
  FETCH_TAG_NEWS,
  FETCH_TAG_NOTICE,
  FETCH_TAG_SEMINAR,
  FETCH_TAG_SLIDE,
} from '@/constants/network';

import { ImportantPostIdentifier } from '@/types/admin';

export const batchUnslideAction = async (ids: Set<number>) => {
  try {
    await patchMultipleSlides(Array.from(ids));
  } catch (e) {
    return e;
  }

  revalidateTag(FETCH_TAG_SLIDE);
  revalidateTag(FETCH_TAG_NEWS);
  revalidateTag(FETCH_TAG_NOTICE);
  revalidateTag(FETCH_TAG_SEMINAR);
};

export const batchUnimportantAction = async (infos: ImportantPostIdentifier[]) => {
  try {
    await patchMultipleImportants(infos);
  } catch (e) {
    return e;
  }

  revalidateTag(FETCH_TAG_IMPORANT);
  revalidateTag(FETCH_TAG_NEWS);
  revalidateTag(FETCH_TAG_NOTICE);
  revalidateTag(FETCH_TAG_SEMINAR);
};
