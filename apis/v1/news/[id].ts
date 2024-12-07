import { deleteRequest, getRequest, patchRequest } from '@/apis';
import { FETCH_TAG_NEWS } from '@/constants/network';
import { News } from '@/apis/types/news';
import { PostSearchQueryParams } from '@/apis/types/post';

export const getNewsDetail = (id: number, params?: PostSearchQueryParams) =>
  getRequest(`/v1/news/${id}`, params, {
    next: { tags: [FETCH_TAG_NEWS] },
    jsessionID: true,
  }) as Promise<News>;

export const deleteNews = (id: number) => deleteRequest(`/v1/news/${id}`, { jsessionID: true });

export const patchNews = async (id: number, formData: FormData) => {
  await patchRequest(`/v1/news/${id}`, { body: formData, jsessionID: true });
};
