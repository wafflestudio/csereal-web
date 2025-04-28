'use server';

import { revalidateTag } from 'next/cache';

import { postNews } from '@/apis/v2/news';
import { deleteNews, patchNews } from '@/apis/v2/news/[id]';
import { FETCH_TAG_NEWS } from '@/constants/network';
import { news } from '@/constants/segmentNode';
import { redirectKo } from '@/i18n/routing';
import { getPath } from '@/utils/page';
import { decodeFormDataFileName } from '@/utils/string';

const newsPath = getPath(news);

export const postNewsAction = async (formData: FormData) => {
  decodeFormDataFileName(formData, 'attachments');
  const resp = await postNews(formData);

  revalidateTag(FETCH_TAG_NEWS);
  redirectKo(`${newsPath}/${resp.id}`);
};

export const patchNewsAction = async (id: number, formData: FormData) => {
  decodeFormDataFileName(formData, 'newAttachments');
  await patchNews(id, formData);

  revalidateTag(FETCH_TAG_NEWS);
  redirectKo(`${newsPath}/${id}`);
};

export const deleteNewsAction = async (id: number) => {
  try {
    await deleteNews(id);
    revalidateTag(FETCH_TAG_NEWS);
  } catch (error) {
    return { message: error instanceof Error ? error.message : '알 수 없는 에러: ' + error };
  }
  redirectKo(newsPath);
};
