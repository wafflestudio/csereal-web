import { deleteRequest, getRequest, patchRequest } from '@/apis';
import { News } from '@/apis/types/news';
import { PostSearchQueryParams } from '@/apis/types/post';
import { FETCH_TAG_NEWS } from '@/constants/network';

export const getNewsDetail = (id: number, params?: PostSearchQueryParams) =>
  getRequest(`/v2/news/${id}`, params, {
    next: { tags: [FETCH_TAG_NEWS] },
    jsessionID: true,
  }) as Promise<News>;

export const deleteNews = (id: number) => deleteRequest(`/v2/news/${id}`, { jsessionID: true });

export const patchNews = async (id: number, formData: FormData) => {
  await patchRequest(`/v2/news/${id}`, { body: formData, jsessionID: true });
};
