'use server';

import { FETCH_TAG_NOTICE } from '@/constants/network';

import { NoticePreviewList, Notice } from '@/types/notice';
import { PostSearchQueryParams } from '@/types/post';

import { deleteRequest, getRequest, patchRequest, postRequest } from '.';

const noticePath = '/notice';

// GET

export const getNoticePosts = (params: PostSearchQueryParams) =>
  getRequest(noticePath, params, {
    next: { tags: [FETCH_TAG_NOTICE] },
    jsessionID: true,
  }) as Promise<NoticePreviewList>;

export const getNoticePostDetail = (id: number, params: PostSearchQueryParams) =>
  getRequest(`${noticePath}/${id}`, params, {
    next: { tags: [FETCH_TAG_NOTICE] },
    jsessionID: true,
  }) as Promise<Notice>;

// POST

export const postNotice = async (formData: FormData) => {
  return postRequest('/notice', { body: formData, jsessionID: true }) as Promise<{ id: number }>;
};

// PATCH

export const patchNotice = (id: number, formData: FormData) =>
  patchRequest(`/notice/${id}`, { body: formData, jsessionID: true });

export const batchUnpinNotice = async (ids: Set<number>) => {
  await patchRequest(noticePath, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idList: Array.from(ids) }),
    jsessionID: true,
  });
};

// DELETE

export const deleteNotice = (id: number) =>
  deleteRequest(`${noticePath}/${id}`, { jsessionID: true });

export const batchDeleteNotice = async (ids: Set<number>) => {
  await deleteRequest(noticePath, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idList: Array.from(ids) }),
    jsessionID: true,
  });
};
