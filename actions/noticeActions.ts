'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { batchDeleteNotice, batchUnpinNotice, deleteNotice } from '@/apis/notice';

import { errorToStr } from '@/utils/error';
import { getPath } from '@/utils/page';
import { notice } from '@/utils/segmentNode';

const noticePath = getPath(notice);

export const batchDeleteNoticeAction = async (ids: Set<number>) => {
  try {
    await batchDeleteNotice(ids);
    revalidateNoticeTag();
  } catch (error) {
    return { message: errorToStr(error) };
  }
};

export const unpinNoticeAction = async (ids: Set<number>) => {
  try {
    await batchUnpinNotice(ids);
    revalidateNoticeTag();
  } catch (error) {
    return { message: errorToStr(error) };
  }
};

export const deleteNoticeAction = async (id: number) => {
  try {
    await deleteNotice(id);
    revalidateNoticeTag();
  } catch (error) {
    return { message: errorToStr(error) };
  }
  redirect(noticePath);
};

export const revalidateNoticeTag = () => {
  revalidateTag('notice');
};
