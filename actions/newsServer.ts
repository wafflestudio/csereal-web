import { News, NewsPreviewList } from '@/types/news';
import { PostSearchQueryParams } from '@/types/post';

import { deleteRequest, getRequest } from '../apis/network/server';

const newsPath = '/news';

export const getNewsPosts = (params: PostSearchQueryParams) =>
  getRequest(newsPath, params, { next: { tags: ['news'] } }) as Promise<NewsPreviewList>;

export const getNewsPostDetail = (id: number, params?: PostSearchQueryParams) =>
  getRequest(`${newsPath}/${id}`, params, { next: { tags: ['news'] } }) as Promise<News>;

export const deleteNews = (id: number) => deleteRequest(`${newsPath}/${id}`);
