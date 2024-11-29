import { getRequest } from '@/apis';
import { FETCH_TAG_NEWS } from '@/constants/network';
import { NewsSearchResult, SearchParam } from '@/types/search';

export const searchNews = (params: SearchParam) =>
  getRequest('/v1/news/totalSearch', params, {
    next: { tags: [FETCH_TAG_NEWS] },
  }) as Promise<NewsSearchResult>;
