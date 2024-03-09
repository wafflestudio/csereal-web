'use server';

import { revalidateTag } from 'next/cache';

import { patchMultipleImportants, patchMultipleSlides } from '@/apis/adminServer';

import { ImportantPostIdentifier } from '@/types/admin';

import { revalidateNewsTag } from './news';
import { revalidateNoticeTag } from './notice';
import { revalidateSeminarTag } from './seminar';

export const batchUnslideAction = async (ids: Set<number>) => {
  try {
    await patchMultipleSlides(Array.from(ids));
    revalidateSlideTag();
    revalidateNewsTag();
  } catch (error) {
    console.log(error instanceof Error ? error.message : error);
    return { error };
  }
};

export const batchUnimportantAction = async (infos: ImportantPostIdentifier[]) => {
  try {
    await patchMultipleImportants(Array.from(infos));
    revalidateImportantTag();
    revalidateNoticeTag();
    revalidateNewsTag();
    revalidateSeminarTag();
  } catch (error) {
    console.log(error instanceof Error ? error.message : error);
    return { error };
  }
};

const revalidateSlideTag = () => {
  revalidateTag('slide');
};

const revalidateImportantTag = () => {
  revalidateTag('important');
};
