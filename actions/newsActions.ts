'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { news } from '@/types/page';

import { getPath } from '@/utils/page';

import { deleteRequest } from '../apis/serverIndex';

const noticeApiPath = '/news';
const newsPath = getPath(news);

/** 성공시에 리턴값이 never(호출한 함수로 되돌아가지 않음)이어야하는데 이상하게 성공시에 undefined를 반환한다. */
export const newsDeleteAction = async (id: string | number) => {
  try {
    await deleteRequest(`${noticeApiPath}/${id}`);
    revalidateNewsTag();
  } catch (error) {
    return { message: error instanceof Error ? error.message : '알 수 없는 에러: ' + error };
  }
  redirect(newsPath);
};

export const revalidateNewsTag = () => {
  revalidateTag('news');
};
