import { PostSearchQueryParams } from '@/hooks/useCustomSearchParams';

import { NoticePostResponse, GETNoticePostsResponse, NoticePost } from '@/types/post';

import { deleteRequest, getRequest, patchRequest, postRequest } from '.';

const noticePath = '/notice';

export const getNoticePosts = (params: PostSearchQueryParams) =>
  getRequest(noticePath, params) as Promise<GETNoticePostsResponse>;

export const getNoticePostDetail = (id: number, params: PostSearchQueryParams) =>
  getRequest(`${noticePath}/${id}`, params) as Promise<NoticePostResponse>;

export const postNotice = (newPost: NoticePost) =>
  postRequest(noticePath, newPost) as Promise<NoticePostResponse>;

export const patchNotice = (id: number, newPost: Partial<NoticePost>) =>
  patchRequest(`${noticePath}/${id}`, newPost) as Promise<NoticePostResponse>;

export const deleteNotice = (id: number) => deleteRequest(`${noticePath}/${id}`);
