import { ReadonlyURLSearchParams } from 'next/navigation';

import { NoticePost } from '@/types/notice';

import { deleteRequest, getRequest, patchRequest, postRequest } from './base';

export const getNoticePosts = (searchParams: ReadonlyURLSearchParams) =>
  getRequest('/notice', searchParams);

export const getNoticePostDetail = (id: number, searchParams: ReadonlyURLSearchParams) =>
  getRequest(`/notice/${id}`, searchParams);

export const postNotice = (newPost: NoticePost) => postRequest('notcie', newPost);

export const patchNotice = (id: number, newPost: Partial<NoticePost>) =>
  patchRequest(`/notice/${id}`, newPost);

export const deleteNotiec = (id: number) => deleteRequest(`/notice/${id}`);
