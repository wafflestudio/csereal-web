'use server';

import { News, NewsPreviewList } from '@/types/news';
import { PostSearchQueryParams } from '@/types/post';

import { deleteRequest, getRequest, patchRequest, postRequest } from './network/server';

const newsPath = '/news';

// GET

export const getNewsPosts = (params: PostSearchQueryParams) =>
  getRequest(newsPath, params, { next: { tags: ['news'] } }) as Promise<NewsPreviewList>;

export const getNewsDetail = (id: number, params?: PostSearchQueryParams) =>
  getRequest(`${newsPath}/${id}`, params, { next: { tags: ['news'] } }) as Promise<News>;

// POST

export const postNews = async (formData: FormData) => {
  await postRequest(newsPath, { body: formData });
};

// PATCH

export const patchNews = async (id: number, formData: FormData) => {
  await patchRequest(`${newsPath}/${id}`, { body: formData });
};

// DELETE

export const deleteNews = (id: number) => deleteRequest(`${newsPath}/${id}`);
