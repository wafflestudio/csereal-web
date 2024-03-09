'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation'; // MEMO: next-intl을 쓰니 prefix가 붙음

import { deleteNews, patchNews, postNews } from '@/apis/news';

import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';

const newsPath = getPath(news);

export const postNewsAction = async (formData: FormData) => {
  await postNews(formData);
  revalidateNewsTag();
  redirect(newsPath);
};

export const patchNewsAction = async (id: number, formData: FormData) => {
  await patchNews(id, formData);
  revalidateNewsTag();
  redirect(`${newsPath}/${id}`);
};

export const deleteNewsAction = async (id: number) => {
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