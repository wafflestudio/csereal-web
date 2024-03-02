'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { deleteSeminar } from '@/actions/seminarServer';

import { getPath } from '@/utils/page';
import { seminar } from '@/utils/segmentNode';

const seminarPath = getPath(seminar);

export const seminarDeleteAction = async (id: number) => {
  try {
    await deleteSeminar(id);
    revalidateSeminarTag();
  } catch (error) {
    return { message: error instanceof Error ? error.message : '알 수 없는 에러: ' + error };
  }
  redirect(seminarPath);
};

export const revalidateSeminarTag = () => {
  revalidateTag('seminar');
};
