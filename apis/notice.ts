import { getMockNoticePostDetail, getMockNoticePosts } from '@/data/notice';

import {
  NoticePostResponse,
  GETNoticePostsResponse,
  NoticePost,
  SimpleNoticePost,
  PostSearchQueryParams,
} from '@/types/post';

import { deleteRequest, getRequest, patchRequest, postRequest } from '.';

export const getNoticePosts = getMockNoticePosts;

export const getNoticePostDetail = getMockNoticePostDetail;

const noticePath = '/notice';

// export const getNoticePosts = (params: PostSearchQueryParams) =>
//   getRequest(noticePath, params) as Promise<GETNoticePostsResponse>;

// export const getNoticePostDetail = (id: number, params: PostSearchQueryParams) =>
//   getRequest(`${noticePath}/${id}`, params) as Promise<NoticePostResponse>;

export const postNotice = (newPost: NoticePost) =>
  postRequest(noticePath, newPost) as Promise<NoticePostResponse>;

export const patchNotice = (id: number, newPost: Partial<NoticePost>) =>
  patchRequest(`${noticePath}/${id}`, newPost) as Promise<NoticePostResponse>;

export const deleteNotice = (id: number) => deleteRequest(`${noticePath}/${id}`);
