import { NoticePreviewList, Notice } from '@/types/notice';
import { PostSearchQueryParams } from '@/types/post';

import { deleteRequest, getRequest, patchRequest } from './serverIndex';

const noticePath = '/notice';

export const getNoticePosts = (params: PostSearchQueryParams) =>
  getRequest(noticePath, params, {
    next: { tags: ['notice'] },
  }) as Promise<NoticePreviewList>;

export const getNoticePostDetail = (id: number, params: PostSearchQueryParams) =>
  getRequest(`${noticePath}/${id}`, params, {
    next: { tags: ['notice'] },
  }) as Promise<Notice>;

export const deleteNotice = (id: number) => deleteRequest(`${noticePath}/${id}`);

export const batchDeleteNotice = async (ids: Set<number>) => {
  await deleteRequest(noticePath, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idList: Array.from(ids) }),
  });
};

export const batchUnpinNotice = async (ids: Set<number>) => {
  await patchRequest(noticePath, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idList: Array.from(ids) }),
  });
};
