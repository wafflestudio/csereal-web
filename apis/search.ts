import { NewsSearchResult, NoticeSearchResult } from '@/types/search';

import { getRequest } from './common/client';

export const getNoticeSearch = (params: {
  keyword: string;
  number: number;
}): Promise<NoticeSearchResult> => getRequest('/notice/totalSearch', params);

export const getNewsSearch = (params: {
  keyword: string;
  number: number;
}): Promise<NewsSearchResult> => getRequest('/news/totalSearch', params);
