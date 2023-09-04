import {
  NoticePostResponse,
  GETNoticePostsResponse,
  NoticePost,
  PostSearchQueryParams,
  POSTNoticeBody,
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

export const patchNotice = (id: number, newPost: Partial<NoticePost>) =>
  patchRequest(`${noticePath}/${id}`, { body: newPost }) as Promise<NoticePostResponse>;

export const deleteNotice = (id: number) => deleteRequest(`${noticePath}/${id}`);
