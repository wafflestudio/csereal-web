'use server';

import { revalidatePath } from 'next/cache';

import { patchMultipleImportants, patchMultipleSlides } from '@/apis/admin';

import { ImportantPostIdentifier } from '@/types/admin';

export const batchUnslide = async (ids: Set<number>) => {
  try {
    await patchMultipleSlides(Array.from(ids));
    revalidatePath('/admin');
  } catch (error) {
    return { error };
  }
};

export const batchUnimportant = async (infos: ImportantPostIdentifier[]) => {
  try {
    await patchMultipleImportants(Array.from(infos));
    revalidatePath('/admin');
  } catch (error) {
    return { error };
  }
};
