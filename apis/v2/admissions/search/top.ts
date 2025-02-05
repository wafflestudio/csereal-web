import { getRequest } from '@/apis';
import { AdmissionsSearchResult, SearchParam } from '@/apis/types/search';

export const searchAdmissions = (params: SearchParam) =>
  getRequest('/v2/admissions/search/top', params) as Promise<AdmissionsSearchResult>;
