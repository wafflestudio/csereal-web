'use server';

import { revalidateTag } from 'next/cache';

import { batchDeleteNotice, batchUnpinNotice, postNotice } from '@/apis/v1/notice';
import { deleteNotice, patchNotice } from '@/apis/v1/notice/[id]';
import { FETCH_TAG_NOTICE } from '@/constants/network';
import { notice } from '@/constants/segmentNode';
import { redirectKo } from '@/i18n/routing';
import { errorToStr } from '@/utils/error';
import { getPath } from '@/utils/page';
import { decodeFormDataFileName } from '@/utils/string';

const noticePath = getPath(notice);

export const postNoticeAction = async (formData: FormData) => {
  decodeFormDataFileName(formData, 'attachments');
  const resp = await postNotice(formData);

  revalidateTag(FETCH_TAG_NOTICE);
  redirectKo(`${noticePath}/${resp.id}`);
};

export const patchNoticeAction = async (id: number, formData: FormData) => {
  decodeFormDataFileName(formData, 'newAttachments');
  await patchNotice(id, formData);

  revalidateTag(FETCH_TAG_NOTICE);
  redirectKo(`${noticePath}/${id}`);
};

export const deleteNoticeAction = async (id: number) => {
  try {
    await deleteNotice(id);
    revalidateTag(FETCH_TAG_NOTICE);
  } catch (error) {
    return { message: errorToStr(error) };
  }
  redirectKo(noticePath);
};

export const batchDeleteNoticeAction = async (ids: Set<number>) => {
  try {
    await batchDeleteNotice(ids);
    revalidateTag(FETCH_TAG_NOTICE);
  } catch (error) {
    return { message: errorToStr(error) };
  }
};

export const unpinNoticeAction = async (ids: Set<number>) => {
  try {
    await batchUnpinNotice(ids);
    revalidateTag(FETCH_TAG_NOTICE);
  } catch (error) {
    return { message: errorToStr(error) };
  }
};
