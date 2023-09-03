import {
  PostSearchQueryParams,
  GETNewsPostsResponse,
  NewsPostResponse,
  NewsPost,
  POSTNewsBody,
} from '@/types/post';

import { deleteRequest, getRequest, patchRequest, postRequest } from '.';

const newsPath = '/news';

export const getNewsPosts = (params: PostSearchQueryParams) =>
  getRequest(newsPath, params, { cache: 'no-store' }) as Promise<GETNewsPostsResponse>;

export const getNewsPostDetail = (id: number, params: PostSearchQueryParams) =>
  getRequest(`${newsPath}/${id}`, params, { cache: 'no-store' }) as Promise<NewsPostResponse>;

export const postNews = async (body: POSTNewsBody) => {
  const formData = new FormData();
  formData.append('request', JSON.stringify(body.request));
  if (body.mainImage) {
    formData.append('mainImage', body.mainImage);
  }
  for (const attachment of body.attachments) {
    formData.append('attachments', attachment);
  }

  return (await postRequest(newsPath, {
    body: formData,
  })) as NewsPostResponse;
};

export const patchNews = (id: number, newPost: Partial<NewsPost>) =>
  patchRequest(`${newsPath}/${id}`, newPost) as Promise<NewsPostResponse>;

export const deleteNews = (id: number) => deleteRequest(`${newsPath}/${id}`);
