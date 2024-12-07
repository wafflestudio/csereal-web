import { deleteRequest, getRequest, patchRequest } from '@/apis';
import { FETCH_TAG_NOTICE } from '@/constants/network';
import { Notice } from '@/apis/types/notice';
import { PostSearchQueryParams } from '@/apis/types/post';

export const getNoticePostDetail = (id: number, params: PostSearchQueryParams) =>
  getRequest(`/v1/notice/${id}`, params, {
    next: { tags: [FETCH_TAG_NOTICE] },
    jsessionID: true,
  }) as Promise<Notice>;

export const patchNotice = (id: number, formData: FormData) =>
  patchRequest(`/v1/notice/${id}`, { body: formData, jsessionID: true });

export const deleteNotice = (id: number) => deleteRequest(`/v1/notice/${id}`, { jsessionID: true });
