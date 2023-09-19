'use server';

import { revalidatePath } from 'next/cache';

import { deleteMultipleNotices, patchMultipleNotices } from '@/apis/notice';

export const batchDelete = async (ids: Set<number>) => {
  try {
    await deleteMultipleNotices(Array.from(ids));
    revalidatePath('/community/notice');
  } catch (error) {
    return { error };
  }
};

export const batchUnpin = async (ids: Set<number>) => {
  try {
    await patchMultipleNotices(Array.from(ids));
    revalidatePath('/community/notice');
  } catch (error) {
    return { error };
  }
};

export const revalidateNotice = async () => {
  revalidatePath('/community/notice');
};
