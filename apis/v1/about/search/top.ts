import { getRequest } from '@/apis';
import { AboutSearchResult, SearchParam } from '@/apis/types/search';

export const searchAbout = (params: SearchParam) =>
  getRequest('/v1/about/search/top', params) as Promise<AboutSearchResult>;
