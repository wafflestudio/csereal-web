'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { deleteSeminar, patchSeminar, postSeminar } from '@/apis/seminar';

import { seminar } from '@/constants/navTreeNode';
import { FETCH_TAG_SEMINAR } from '@/constants/network';

import { getPath } from '@/utils/page';
import { decodeFormDataFileName } from '@/utils/string';

const seminarPath = getPath(seminar);

export const postSeminarAction = async (formData: FormData) => {
  decodeFormDataFileName(formData, 'attachments');
  const resp = await postSeminar(formData);

  revalidateTag(FETCH_TAG_SEMINAR);
  redirect(`${seminarPath}/${resp.id}`);
};

export const patchSeminarAction = async (id: number, formData: FormData) => {
  decodeFormDataFileName(formData, 'newAttachments');
  await patchSeminar(id, formData);

  revalidateTag(FETCH_TAG_SEMINAR);
  redirect(`${seminarPath}/${id}`);
};

export const deleteSeminarAction = async (id: number) => {
  try {
    await deleteSeminar(id);
    revalidateTag(FETCH_TAG_SEMINAR);
  } catch (error) {
    return { message: error instanceof Error ? error.message : '알 수 없는 에러: ' + error };
  }
  redirect(seminarPath);
};
