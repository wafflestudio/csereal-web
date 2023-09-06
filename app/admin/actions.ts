'use server';

import { revalidatePath } from 'next/cache';

import { patchMultipleImportants, patchMultipleSlides } from '@/apis/admin';

import { ImportantInfo } from '@/types/admin';

export const batchUnslide = async (ids: Set<number>) => {
  try {
    const result = await patchMultipleSlides(Array.from(ids));
    revalidatePath('/admin');
  } catch (error) {
    return { error };
  }
};

export const batchUnimportant = async (infos: ImportantInfo[]) => {
  try {
    await patchMultipleImportants(Array.from(infos));
    revalidatePath('/admin');
  } catch (error) {
    return { error };
  }
};
