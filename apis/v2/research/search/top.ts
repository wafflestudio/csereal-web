import { getRequest } from '@/apis';
import { ResearchSearchResult, SearchParam } from '@/apis/types/search';

export const searchResearch = (params: SearchParam) =>
  getRequest('/v2/research/search/top', params) as Promise<ResearchSearchResult>;
