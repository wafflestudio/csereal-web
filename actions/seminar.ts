'use server';

import { revalidateTag } from 'next/cache';

import { postSeminar } from '@/apis/v1/seminar';
import { deleteSeminar, patchSeminar } from '@/apis/v1/seminar/[id]';
import { FETCH_TAG_SEMINAR } from '@/constants/network';
import { seminar } from '@/constants/segmentNode';
import { redirectKo } from '@/i18n/routing';
import { getPath } from '@/utils/page';
import { decodeFormDataFileName } from '@/utils/string';

const seminarPath = getPath(seminar);

export const postSeminarAction = async (formData: FormData) => {
  decodeFormDataFileName(formData, 'attachments');
  const resp = await postSeminar(formData);

  revalidateTag(FETCH_TAG_SEMINAR);
  redirectKo(`${seminarPath}/${resp.id}`);
};

export const patchSeminarAction = async (id: number, formData: FormData) => {
  decodeFormDataFileName(formData, 'newAttachments');
  await patchSeminar(id, formData);

  revalidateTag(FETCH_TAG_SEMINAR);
  redirectKo(`${seminarPath}/${id}`);
};

export const deleteSeminarAction = async (id: number) => {
  try {
    await deleteSeminar(id);
    revalidateTag(FETCH_TAG_SEMINAR);
  } catch (error) {
    return { message: error instanceof Error ? error.message : '알 수 없는 에러: ' + error };
  }
  redirectKo(seminarPath);
};
