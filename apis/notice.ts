import { ReadonlyURLSearchParams } from 'next/navigation';

import { NoticePostFull } from '@/types/notice';

import { deleteRequest, getRequest, patchRequest, postRequest } from './base';

export const getNoticePosts = (searchParams: ReadonlyURLSearchParams) =>
  getRequest('/notice', searchParams);

export const getNoticePostDetail = (id: number) => getRequest(`/notice/${id}`, {});

export const postNotice = (newPost: NoticePostFull) => postRequest('notcie', newPost);

export const patchNotice = (id: number, newPost: NoticePostFull) =>
  patchRequest(`/notice/${id}`, newPost);

export const deleteNotiec = (id: number) => deleteRequest(`/notice/${id}`);
