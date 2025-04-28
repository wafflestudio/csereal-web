import { deleteRequest, getRequest, patchRequest } from '@/apis';
import { Notice } from '@/apis/types/notice';
import { PostSearchQueryParams } from '@/apis/types/post';
import { FETCH_TAG_NOTICE } from '@/constants/network';

export const getNoticePostDetail = (id: number, params: PostSearchQueryParams) =>
  getRequest(`/v2/notice/${id}`, params, {
    next: { tags: [FETCH_TAG_NOTICE] },
    jsessionID: true,
  }) as Promise<Notice>;

export const patchNotice = (id: number, formData: FormData) =>
  patchRequest(`/v2/notice/${id}`, { body: formData, jsessionID: true });

export const deleteNotice = (id: number) => deleteRequest(`/v2/notice/${id}`, { jsessionID: true });
