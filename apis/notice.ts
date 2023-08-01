import { ReadonlyURLSearchParams } from 'next/navigation';

import { NoticePost, NoticePostFull, NoticePostSimple } from '@/types/notice';

import { deleteRequest, getRequest, patchRequest, postRequest } from '.';

export const getNoticePostsAPI = (searchParams: ReadonlyURLSearchParams) =>
  getRequest<{ total: number; searchList: NoticePostSimple[] }>('/notice', searchParams);

export const getNoticePostDetailAPI = (id: number, searchParams: ReadonlyURLSearchParams) =>
  getRequest<NoticePostFull>(`/notice/${id}`, searchParams);

export const postNoticeAPI = (newPost: NoticePost) =>
  postRequest<NoticePostFull>('notcie', newPost);

export const patchNoticeAPI = (id: number, newPost: Partial<NoticePost>) =>
  patchRequest<NoticePostFull>(`/notice/${id}`, newPost);

export const deleteNoticeAPI = (id: number) => deleteRequest(`/notice/${id}`);
