'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { deleteNews } from '@/apis/newsServer';

import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';


const newsPath = getPath(news);

export const newsDeleteAction = async (id: number) => {
  try {
    await deleteNews(id);
    revalidateNewsTag();
  } catch (error) {
    return { message: error instanceof Error ? error.message : '알 수 없는 에러: ' + error };
  }
  redirect(newsPath);
};

export const revalidateNewsTag = () => {
  revalidateTag('news');
};
