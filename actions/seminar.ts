'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { deleteSeminar, patchSeminar, postSeminar } from '@/apis/seminar';

import { getPath } from '@/utils/page';
import { seminar } from '@/utils/segmentNode';

const seminarPath = getPath(seminar);

export const postSeminarAction = async (formData: FormData) => {
  await postSeminar(formData);
  revalidateSeminarTag();
  redirect(seminarPath);
};

export const patchSeminarAction = async (id: number, formData: FormData) => {
  await patchSeminar(id, formData);
  revalidateSeminarTag();
  redirect(`${seminarPath}/${id}`);
};

export const deleteSeminarAction = async (id: number) => {
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