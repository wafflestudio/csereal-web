import { NoticePost } from '@/types/post';

import { deleteRequest, getRequest, patchRequest, postRequest } from '.';

const noticePath = '/notice';

export const getNoticePosts = (query: string) => getRequest(`${noticePath}${query}`);

export const getNoticePostDetail = (id: number, query: string) =>
  getRequest(`${noticePath}/${id}${query}`);

export const postNotice = (newPost: NoticePost) => postRequest(noticePath, newPost);

export const patchNotice = (id: number, newPost: Partial<NoticePost>) =>
  patchRequest(`${noticePath}/${id}`, newPost);

export const deleteNotice = (id: number) => deleteRequest(`${noticePath}/${id}`);
