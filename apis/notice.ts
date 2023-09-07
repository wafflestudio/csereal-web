import {
  NoticePostResponse,
  GETNoticePostsResponse,
  NoticePost,
  PostSearchQueryParams,
  POSTNoticeBody,
  PatchNoticeBody,
} from '@/types/post';

import { deleteRequest, getRequest, patchRequest, postRequest } from '.';

const noticePath = '/notice';

export const getNoticePosts = (params: PostSearchQueryParams) =>
  getRequest(noticePath, params, { cache: 'no-store' }) as Promise<GETNoticePostsResponse>;

export const getNoticePostDetail = (id: number, params: PostSearchQueryParams) =>
  getRequest(`${noticePath}/${id}`, params, { cache: 'no-store' }) as Promise<NoticePostResponse>;

export const postNotice = async (body: POSTNoticeBody) => {
  const formData = new FormData();
  formData.append(
    'request',
    new Blob([JSON.stringify(body.request)], {
      type: 'application/json',
    }),
  );
  for (const attachment of body.attachments) {
    formData.append('attachments', attachment);
  }

  return (await postRequest(noticePath, {
    body: formData,
  })) as NoticePostResponse;
};

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

  await patchRequest(`${noticePath}/${id}`, {
    body: formData,
  });
};

export const patchMultipleNotices = (idList: number[]) =>
  patchRequest(noticePath, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idList }),
  });

export const deleteNotice = (id: number) => deleteRequest(`${noticePath}/${id}`);

export const deleteMultipleNotices = (idList: number[]) =>
  deleteRequest(noticePath, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idList }),
  });
