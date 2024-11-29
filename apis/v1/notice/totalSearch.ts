import { getRequest } from '@/apis';
import { FETCH_TAG_NOTICE } from '@/constants/network';
import { NoticeSearchResult, SearchParam } from '@/types/search';

export const searchNotice = (params: SearchParam) =>
  getRequest('/v1/notice/totalSearch', params, {
    next: { tags: [FETCH_TAG_NOTICE] },
  }) as Promise<NoticeSearchResult>;
