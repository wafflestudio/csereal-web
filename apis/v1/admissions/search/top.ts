import { getRequest } from '@/apis';
import { AdmissionsSearchResult, SearchParam } from '@/types/search';

export const searchAdmissions = (params: SearchParam) =>
  getRequest('/v1/admissions/search/top', params) as Promise<AdmissionsSearchResult>;
