import { getRequest } from '@/apis';
import { AcademicsSearchResult, SearchParam } from '@/apis/types/search';

export const searchAcademics = (params: SearchParam) =>
  getRequest('/v2/academics/search/top', params) as Promise<AcademicsSearchResult>;
