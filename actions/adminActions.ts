'use server';

import { revalidateTag } from 'next/cache';

import { patchMultipleImportants, patchMultipleSlides } from '@/apis/adminServer';

import { ImportantPostIdentifier } from '@/types/admin';

export const batchUnslideAction = async (ids: Set<number>) => {
  try {
    await patchMultipleSlides(Array.from(ids));
    revalidateSlideTag();
  } catch (error) {
    console.log(error instanceof Error ? error.message : error);
    return { error };
  }
};

export const batchUnimportantAction = async (infos: ImportantPostIdentifier[]) => {
  try {
    await patchMultipleImportants(Array.from(infos));
    revalidateImportantTag();
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
