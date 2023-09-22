import { NoticePreviewList, Notice } from '@/types/notice';
import { PostSearchQueryParams } from '@/types/post';

import { getRequest } from './serverIndex';

const noticePath = '/notice';

export const getNoticePosts = (params: PostSearchQueryParams) =>
  getRequest(noticePath, params, {
    next: { tags: ['notice'] },
  }) as Promise<NoticePreviewList>;

export const getNoticePostDetail = (id: number, params: PostSearchQueryParams) =>
  getRequest(`${noticePath}/${id}`, params, {
    next: { tags: ['notice'] },
  }) as Promise<Notice>;
