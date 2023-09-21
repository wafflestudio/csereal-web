import { Notice, NoticePreviewList, POSTNoticeBody, PatchNoticeBody } from '@/types/notice';
import { PostSearchQueryParams } from '@/types/post';

import {
  deleteRequestWithCookie,
  getRequest,
  patchRequestWithCookie,
  postRequestWithCookie,
} from '.';

const noticePath = '/notice';

export const getNoticePosts = (params: PostSearchQueryParams) =>
  getRequest(noticePath, params, { next: { tags: ['notice'] } }) as Promise<NoticePreviewList>;

export const getNoticePostDetail = (id: number, params: PostSearchQueryParams) =>
  getRequest(`${noticePath}/${id}`, params, { next: { tags: ['notice'] } }) as Promise<Notice>;

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

export const deleteNotice = (id: number) => deleteRequestWithCookie(`${noticePath}/${id}`);
