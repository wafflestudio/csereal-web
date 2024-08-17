'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation'; // MEMO: next-intl을 쓰니 prefix가 붙음

import { deleteNews, patchNews, postNews } from '@/apis/news';
import { FETCH_TAG_NEWS } from '@/constants/network';
import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';
import { decodeFormDataFileName } from '@/utils/string';

const newsPath = getPath(news);

export const postNewsAction = async (formData: FormData) => {
  decodeFormDataFileName(formData, 'attachments');
  const resp = await postNews(formData);

  revalidateTag(FETCH_TAG_NEWS);
  redirect(`${newsPath}/${resp.id}`);
};

export const patchNewsAction = async (id: number, formData: FormData) => {
  decodeFormDataFileName(formData, 'newAttachments');
  await patchNews(id, formData);

  revalidateTag(FETCH_TAG_NEWS);
  redirect(`${newsPath}/${id}`);
};

export const deleteNewsAction = async (id: number) => {
  try {
    await deleteNews(id);
    revalidateTag(FETCH_TAG_NEWS);
  } catch (error) {
    return { message: error instanceof Error ? error.message : '알 수 없는 에러: ' + error };
  }
  redirect(newsPath);
};
