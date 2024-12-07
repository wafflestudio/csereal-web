import { getRequest } from '@/apis';
import { NoticeSearchResult, SearchParam } from '@/apis/types/search';
import { FETCH_TAG_NOTICE } from '@/constants/network';

export const searchNotice = (params: SearchParam) =>
  getRequest('/v1/notice/totalSearch', params, {
    next: { tags: [FETCH_TAG_NOTICE] },
  }) as Promise<NoticeSearchResult>;
