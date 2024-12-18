'use server';

import { revalidateTag } from 'next/cache';

import { ImportantPostIdentifier } from '@/apis/types/admin';
import { patchMultipleImportants } from '@/apis/v1/admin/important';
import { patchMultipleSlides } from '@/apis/v1/admin/slide';
import {
  FETCH_TAG_IMPORANT,
  FETCH_TAG_NEWS,
  FETCH_TAG_NOTICE,
  FETCH_TAG_SEMINAR,
  FETCH_TAG_SLIDE,
} from '@/constants/network';

export const batchUnslideAction = async (ids: number[]) => {
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
