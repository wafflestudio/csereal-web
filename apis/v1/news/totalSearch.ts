import { getRequest } from '@/apis';
import { NewsSearchResult, SearchParam } from '@/apis/types/search';
import { FETCH_TAG_NEWS } from '@/constants/network';

export const searchNews = (params: SearchParam) =>
  getRequest('/v1/news/totalSearch', params, {
    next: { tags: [FETCH_TAG_NEWS] },
  }) as Promise<NewsSearchResult>;
