import { NewsSearchResult, NoticeSearchResult } from '@/types/search';

import { getRequest } from './network/client';

// about academics admissions member research

export const getNoticeByKeyword = (params: {
  keyword: string;
  number: number;
}): Promise<NoticeSearchResult> => getRequest('/notice/totalSearch', params);

export const getNewsByKeyword = (params: {
  keyword: string;
  number: number;
}): Promise<NewsSearchResult> => getRequest('/news/totalSearch', params);
