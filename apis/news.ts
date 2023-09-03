import {
  PostSearchQueryParams,
  GETNewsPostsResponse,
  NewsPostResponse,
  NewsPost,
} from '@/types/post';

import { deleteRequest, getRequest, patchRequest, postRequest } from '.';

const newsPath = '/news';

export const getNewsPosts = (params: PostSearchQueryParams) =>
  getRequest(newsPath, params, { cache: 'no-store' }) as Promise<GETNewsPostsResponse>;

export const getNewsPostDetail = (id: number, params: PostSearchQueryParams) =>
  getRequest(`${newsPath}/${id}`, params, { cache: 'no-store' }) as Promise<NewsPostResponse>;

export const postNews = (newPost: NewsPost) =>
  postRequest(newsPath, newPost) as Promise<NewsPostResponse>;

export const patchNews = (id: number, newPost: Partial<NewsPost>) =>
  patchRequest(`${newsPath}/${id}`, newPost) as Promise<NewsPostResponse>;

export const deleteNews = (id: number) => deleteRequest(`${newsPath}/${id}`);
