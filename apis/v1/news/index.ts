import { getRequest, postRequest } from '@/apis';
import { FETCH_TAG_NEWS } from '@/constants/network';
import { NewsPreviewList } from '@/apis/types/news';
import { PostSearchQueryParams } from '@/apis/types/post';

export const getNewsPosts = (params: PostSearchQueryParams) =>
  getRequest('/v1/news', params, {
    next: { tags: [FETCH_TAG_NEWS] },
    jsessionID: true,
  }) as Promise<NewsPreviewList>;

export const postNews = async (formData: FormData) => {
  return postRequest('/v1/news', { body: formData, jsessionID: true }) as Promise<{ id: number }>;
};
