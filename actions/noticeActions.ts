'use server';

import { revalidateTag } from 'next/cache';

import { deleteRequest, patchRequest } from '.';

const noticePath = '/notice';

export const batchDeleteAction = async (ids: Set<number>) => {
  try {
    await deleteRequest(noticePath, {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idList: Array.from(ids) }),
    });
    revalidateTag('notice');
  } catch (error) {
    return { message: error instanceof Error ? error.message : '알 수 없는 에러: ' + error };
  }
};

export const batchUnpinAction = async (ids: Set<number>) => {
  try {
    await patchRequest(noticePath, {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idList: Array.from(ids) }),
    });
    revalidateTag('notice');
  } catch (error) {
    return { message: error instanceof Error ? error.message : '알 수 없는 에러: ' + error };
  }
};
