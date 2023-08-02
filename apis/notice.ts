import { ReadonlyURLSearchParams } from 'next/navigation';

import { NoticePost } from '@/types/post';

import { deleteRequest, getRequest, patchRequest, postRequest } from '.';

const noticePath = '/notice';

export const getNoticePosts = (searchParams: ReadonlyURLSearchParams) =>
  getRequest(noticePath, searchParams);

export const getNoticePostDetail = (id: number, searchParams: ReadonlyURLSearchParams) =>
  getRequest(`${noticePath}/${id}`, searchParams);

export const postNotice = (newPost: NoticePost) => postRequest('notcie', newPost);

export const patchNotice = (id: number, newPost: Partial<NoticePost>) =>
  patchRequest(`${noticePath}/${id}`, newPost);

export const deleteNotice = (id: number) => deleteRequest(`${noticePath}/${id}`);
