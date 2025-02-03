import { getRequest, postRequest } from '@/apis';
import { NewsPreviewList } from '@/apis/types/news';
import { PostSearchQueryParams } from '@/apis/types/post';
import { FETCH_TAG_NEWS } from '@/constants/network';

export const getNewsPosts = (params: PostSearchQueryParams) =>
  getRequest('/v2/news', params, {
    next: { tags: [FETCH_TAG_NEWS] },
    jsessionID: true,
  }) as Promise<NewsPreviewList>;

export const postNews = async (formData: FormData) => {
  return postRequest('/v2/news', { body: formData, jsessionID: true }) as Promise<{ id: number }>;
};
