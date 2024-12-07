import { getRequest } from '@/apis';
import { MemberSearchResult, SearchParam } from '@/apis/types/search';

export const searchMember = (params: SearchParam) =>
  getRequest('/v1/member/search/top', params) as Promise<MemberSearchResult>;
