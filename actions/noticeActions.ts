'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { batchDeleteNotice, batchUnpinNotice, deleteNotice } from '@/actions/noticeServer';

import { getPath } from '@/utils/page';
import { notice } from '@/utils/segmentNode';

const noticePath = getPath(notice);

export const batchDeleteAction = async (ids: Set<number>) => {
  try {
    await batchDeleteNotice(ids);
    revalidateNoticeTag();
  } catch (error) {
    return { message: error instanceof Error ? error.message : '알 수 없는 에러: ' + error };
  }
};

export const batchUnpinAction = async (ids: Set<number>) => {
  try {
    await batchUnpinNotice(ids);
    revalidateNoticeTag();
  } catch (error) {
    return { message: error instanceof Error ? error.message : '알 수 없는 에러: ' + error };
  }
};

/** 성공시에 리턴값이 never(호출한 함수로 되돌아가지 않음)이어야하는데 이상하게 성공시에 undefined를 반환한다. */
export const noticeDeleteAction = async (id: number) => {
  try {
    await deleteNotice(id);
    revalidateNoticeTag();
  } catch (error) {
    return { message: error instanceof Error ? error.message : '알 수 없는 에러: ' + error };
  }
  redirect(noticePath);
};

export const revalidateNoticeTag = () => {
  revalidateTag('notice');
};
