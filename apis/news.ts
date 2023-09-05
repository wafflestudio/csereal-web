import { News, NewsPreviewList, PATCHNewsBody, POSTNewsBody } from '@/types/news';
import { PostSearchQueryParams } from '@/types/post';

import { deleteRequest, getRequest, patchRequest, postRequest } from '.';

const newsPath = '/news';

export const getNewsPosts = (params: PostSearchQueryParams) =>
  getRequest(newsPath, params, { cache: 'no-store' }) as Promise<NewsPreviewList>;

export const getNewsPostDetail = (id: number, params?: PostSearchQueryParams) =>
  getRequest(`${newsPath}/${id}`, params, { cache: 'no-store' }) as Promise<News>;

export const postNews = async (body: POSTNewsBody) => {
  const formData = new FormData();

  formData.append(
    'request',
    new Blob([JSON.stringify(body.request)], {
      type: 'application/json',
    }),
  );

  if (body.mainImage) {
    formData.append('mainImage', body.mainImage);
  }

  for (const attachment of body.attachments) {
    formData.append('attachments', attachment);
  }

  await postRequest(newsPath, {
    body: formData,
  });
};

export const patchNews = async (id: number, body: PATCHNewsBody) => {
  const formData = new FormData();

  formData.append(
    'request',
    new Blob([JSON.stringify(body.request)], {
      type: 'application/json',
    }),
  );

  if (body.mainImage) {
    formData.append('mainImage', body.mainImage);
  }

  for (const attachment of body.newAttachments) {
    formData.append('newAttachments', attachment);
  }

  await patchRequest(`${newsPath}/${id}`, {
    body: formData,
  });
};

export const deleteNews = (id: number) => deleteRequest(`${newsPath}/${id}`);
