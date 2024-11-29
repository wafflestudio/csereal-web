'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation'; // MEMO: next-intl을 쓰니 prefix가 붙음

import { batchDeleteNotice, batchUnpinNotice, postNotice } from '@/apis/v1/notice';
import { deleteNotice, patchNotice } from '@/apis/v1/notice/[id]';
import { FETCH_TAG_NOTICE } from '@/constants/network';
import { errorToStr } from '@/utils/error';
import { getPath } from '@/utils/page';
import { notice } from '@/utils/segmentNode';
import { decodeFormDataFileName } from '@/utils/string';

const noticePath = getPath(notice);

export const postNoticeAction = async (formData: FormData) => {
  decodeFormDataFileName(formData, 'attachments');
  const resp = await postNotice(formData);

  revalidateTag(FETCH_TAG_NOTICE);
  redirect(`${noticePath}/${resp.id}`);
};

export const patchNoticeAction = async (id: number, formData: FormData) => {
  decodeFormDataFileName(formData, 'newAttachments');
  await patchNotice(id, formData);

  revalidateTag(FETCH_TAG_NOTICE);
  redirect(`${noticePath}/${id}`);
};

export const deleteNoticeAction = async (id: number) => {
  try {
    await deleteNotice(id);
    revalidateTag(FETCH_TAG_NOTICE);
  } catch (error) {
    return { message: errorToStr(error) };
  }
  redirect(noticePath);
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
