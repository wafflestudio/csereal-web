import { deleteRequest, getRequest, patchRequest, postRequest } from '@/apis';
import { FETCH_TAG_NOTICE } from '@/constants/network';
import { NoticePreviewList } from '@/apis/types/notice';
import { PostSearchQueryParams } from '@/apis/types/post';

export const getNoticePosts = (params: PostSearchQueryParams) =>
  getRequest('/v1/notice', params, {
    next: { tags: [FETCH_TAG_NOTICE] },
    jsessionID: true,
  }) as Promise<NoticePreviewList>;

export const postNotice = async (formData: FormData) => {
  return postRequest('/v1/notice', { body: formData, jsessionID: true }) as Promise<{
    id: number;
  }>;
};

export const batchDeleteNotice = async (ids: Set<number>) => {
  await deleteRequest('/v1/notice', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idList: Array.from(ids) }),
    jsessionID: true,
  });
};

export const batchUnpinNotice = async (ids: Set<number>) => {
  await patchRequest('/v1/notice', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idList: Array.from(ids) }),
    jsessionID: true,
  });
};
