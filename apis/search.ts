import { getRequest } from '.';

export const getNoticeSearch = (params: { keyword: string; number: number }) =>
  getRequest('/notice/totalSearch', params);

export const getNewsSearch = (params: { keyword: string; number: number }) =>
  getRequest('/news/totalSearch', params);
