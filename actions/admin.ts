'use server';

import { revalidateTag } from 'next/cache';

import { patchMultipleImportants, patchMultipleSlides } from '@/apis/admin';

import { ImportantPostIdentifier } from '@/types/admin';

import { revalidateNewsTag } from './news';
import { revalidateNoticeTag } from './notice';
import { revalidateSeminarTag } from './seminar';

export const batchUnslideAction = async (ids: Set<number>) => {
  try {
    await patchMultipleSlides(Array.from(ids));
  } catch (e) {
    return e;
  }
  revalidateSlideTag();
  revalidateNewsTag();
};

export const batchUnimportantAction = async (infos: ImportantPostIdentifier[]) => {
  try {
    await patchMultipleImportants(Array.from(infos));
  } catch (e) {
    return e;
  }
  revalidateImportantTag();
  revalidateNoticeTag();
  revalidateNewsTag();
  revalidateSeminarTag();
};

const revalidateSlideTag = () => {
  revalidateTag('slide');
};

const revalidateImportantTag = () => {
  revalidateTag('important');
};
