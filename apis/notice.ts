'use server';

import { NoticePreviewList, Notice, POSTNoticeBody, PatchNoticeBody } from '@/types/notice';
import { PostSearchQueryParams } from '@/types/post';

import { deleteRequest, getRequest, patchRequest, postRequest } from './network/server';

const noticePath = '/notice';

// GET

export const getNoticePosts = (params: PostSearchQueryParams) =>
  getRequest(noticePath, params, { next: { tags: ['notice'] } }) as Promise<NoticePreviewList>;

export const getNoticePostDetail = (id: number, params: PostSearchQueryParams) =>
  getRequest(`${noticePath}/${id}`, params, { next: { tags: ['notice'] } }) as Promise<Notice>;

// POST

export const postNotice = async (body: POSTNoticeBody) => {
  const formData = new FormData();

  formData.append(
    'request',
    new Blob([JSON.stringify(body.request)], {
      type: 'application/json',
    }),
  );

  body.attachments.forEach((attachment) => formData.append('attachments', attachment));

  await postRequest('/notice', { body: formData });
};

// PATCH

export const patchNotice = async (id: number, body: PatchNoticeBody) => {
  const formData = new FormData();

  formData.append(
    'request',
    new Blob([JSON.stringify(body.request)], {
      type: 'application/json',
    }),
  );

  for (const attachment of body.newAttachments) {
    formData.append('newAttachments', attachment);
  }

  await patchRequest(`/notice/${id}`, { body: formData });
};

export const batchUnpinNotice = async (ids: Set<number>) => {
  await patchRequest(noticePath, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idList: Array.from(ids) }),
  });
};

// DELETE

export const deleteNotice = (id: number) => deleteRequest(`${noticePath}/${id}`);

export const batchDeleteNotice = async (ids: Set<number>) => {
  await deleteRequest(noticePath, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idList: Array.from(ids) }),
  });
};
