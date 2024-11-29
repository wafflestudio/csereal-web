import { deleteRequest, getRequest } from '@/apis';
import { FETCH_TAG_NEWS } from '@/constants/network';
import { News } from '@/types/news';
import { PostSearchQueryParams } from '@/types/post';

export const getNewsDetail = (id: number, params?: PostSearchQueryParams) =>
  getRequest(`/v1/news/${id}`, params, {
    next: { tags: [FETCH_TAG_NEWS] },
    jsessionID: true,
  }) as Promise<News>;

export const deleteNews = (id: number) => deleteRequest(`/v1/news/${id}`, { jsessionID: true });
