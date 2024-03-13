'use server';

import { FETCH_TAG_NEWS } from '@/constants/network';

import { News, NewsPreviewList } from '@/types/news';
import { PostSearchQueryParams } from '@/types/post';

import { deleteRequest, getRequest, patchRequest, postRequest } from '.';

const newsPath = '/news';

// GET

export const getNewsPosts = (params: PostSearchQueryParams) =>
  getRequest(newsPath, params, {
    next: { tags: [FETCH_TAG_NEWS] },
    jsessionID: true,
  }) as Promise<NewsPreviewList>;

export const getNewsDetail = (id: number, params?: PostSearchQueryParams) =>
  getRequest(`${newsPath}/${id}`, params, {
    next: { tags: [FETCH_TAG_NEWS] },
    jsessionID: true,
  }) as Promise<News>;

// POST

export const postNews = async (formData: FormData) => {
  return postRequest(newsPath, { body: formData, jsessionID: true }) as Promise<{ id: number }>;
};

// PATCH

export const patchNews = async (id: number, formData: FormData) => {
  await patchRequest(`${newsPath}/${id}`, { body: formData, jsessionID: true });
};

// DELETE

export const deleteNews = (id: number) => deleteRequest(`${newsPath}/${id}`, { jsessionID: true });
