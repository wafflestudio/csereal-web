import { Notice, NoticePreviewList, POSTNoticeBody, PatchNoticeBody } from '@/types/notice';
import { PostSearchQueryParams } from '@/types/post';

import { deleteRequest, deleteRequestWithCookie, getRequest, patchRequest, patchRequestWithCookie, postRequest, postRequestWithCookie } from '.';

const noticePath = '/notice';

export const getNoticePosts = (params: PostSearchQueryParams) =>
  getRequest(noticePath, params, { cache: 'no-store' }) as Promise<NoticePreviewList>;

export const getNoticePostDetail = (id: number, params: PostSearchQueryParams) =>
  getRequest(`${noticePath}/${id}`, params, { cache: 'no-store' }) as Promise<Notice>;

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

  await postRequestWithCookie(noticePath, {
    body: formData,
  });
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

  await patchRequestWithCookie(`${noticePath}/${id}`, {
    body: formData,
  });
};

export const patchMultipleNotices = (idList: number[]) =>
  patchRequestWithCookie(noticePath, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idList }),
  });

export const deleteNotice = (id: number) => deleteRequestWithCookie(`${noticePath}/${id}`);

export const deleteMultipleNotices = (idList: number[]) =>
  deleteRequestWithCookie(noticePath, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idList }),
  });
