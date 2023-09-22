'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { NoticePreviewList, Notice } from '@/types/notice';
import { notice } from '@/types/page';
import { PostSearchQueryParams } from '@/types/post';

import { getPath } from '@/utils/page';

import { deleteRequest, getRequest, patchRequest } from '../apis/serverIndex';

const noticeApiPath = '/notice';
const noticePath = getPath(notice);

export const batchDeleteAction = async (ids: Set<number>) => {
  try {
    await deleteRequest(noticeApiPath, {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idList: Array.from(ids) }),
    });
    revalidateNoticeTag();
  } catch (error) {
    return { message: error instanceof Error ? error.message : '알 수 없는 에러: ' + error };
  }
};

export const batchUnpinAction = async (ids: Set<number>) => {
  try {
    await patchRequest(noticeApiPath, {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idList: Array.from(ids) }),
    });
    revalidateNoticeTag();
  } catch (error) {
    return { message: error instanceof Error ? error.message : '알 수 없는 에러: ' + error };
  }
};

/** 성공시에 리턴값이 never(호출한 함수도 되돌아가지 않음)이어야하는데 이상하게 성공시에 undefined를 반환한다. */
export const noticeDeleteAction = async (id: string | number) => {
  try {
    await deleteRequest(`${noticeApiPath}/${id}`);
    revalidateNoticeTag();
  } catch (error) {
    return { message: error instanceof Error ? error.message : '알 수 없는 에러: ' + error };
  }
  redirect(noticePath);
};

export const revalidateNoticeTag = () => {
  revalidateTag('notice');
};
