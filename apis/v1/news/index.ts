import { getRequest, patchRequest, postRequest } from '@/apis';
import { FETCH_TAG_NEWS } from '@/constants/network';
import { NewsPreviewList } from '@/types/news';
import { PostSearchQueryParams } from '@/types/post';

export const getNewsPosts = (params: PostSearchQueryParams) =>
  getRequest('/v1/news', params, {
    next: { tags: [FETCH_TAG_NEWS] },
    jsessionID: true,
  }) as Promise<NewsPreviewList>;

export const postNews = async (formData: FormData) => {
  return postRequest('/v1/news', { body: formData, jsessionID: true }) as Promise<{ id: number }>;
};

export const patchNews = async (id: number, formData: FormData) => {
  await patchRequest(`/v1/news/${id}`, { body: formData, jsessionID: true });
};
