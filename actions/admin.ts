'use server';

import { revalidateTag } from 'next/cache';

import { withErrorHandler } from '@/actions/errorHandler';
import { ImportantPostIdentifier } from '@/apis/types/admin';
import { patchMultipleImportants } from '@/apis/v2/admin/important';
import { patchMultipleSlides } from '@/apis/v2/admin/slide';
import {
  FETCH_TAG_IMPORANT,
  FETCH_TAG_NEWS,
  FETCH_TAG_NOTICE,
  FETCH_TAG_SEMINAR,
  FETCH_TAG_SLIDE,
} from '@/constants/network';

export const batchUnslideAction = withErrorHandler(async (ids: number[]) => {
  await patchMultipleSlides(Array.from(ids));

  revalidateTag(FETCH_TAG_SLIDE);
  revalidateTag(FETCH_TAG_NEWS);
  revalidateTag(FETCH_TAG_NOTICE);
  revalidateTag(FETCH_TAG_SEMINAR);
});

export const batchUnimportantAction = withErrorHandler(async (infos: ImportantPostIdentifier[]) => {
  await patchMultipleImportants(infos);

  revalidateTag(FETCH_TAG_IMPORANT);
  revalidateTag(FETCH_TAG_NEWS);
  revalidateTag(FETCH_TAG_NOTICE);
  revalidateTag(FETCH_TAG_SEMINAR);
});
