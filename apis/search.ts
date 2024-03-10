import {
  AboutSearchResult,
  AcademicsSearchResult,
  AdmissionsSearchResult,
  MemberSearchResult,
  NewsSearchResult,
  NoticeSearchResult,
} from '@/types/search';

import { getRequest } from './network/server';

type SearchParam = { keyword: string; number: number };

export const searchNotice = (params: SearchParam) =>
  getRequest('/notice/totalSearch', params) as Promise<NoticeSearchResult>;

export const searchNews = (params: SearchParam) =>
  getRequest('/news/totalSearch', params) as Promise<NewsSearchResult>;

export const searchAbout = (params: SearchParam) =>
  getRequest('/about/top', params) as Promise<AboutSearchResult>;

export const searchAcademics = (params: SearchParam) =>
  getRequest('/academics/top', params) as Promise<AcademicsSearchResult>;

export const searchAdmissions = (params: SearchParam) =>
  getRequest('/admissions/top', params) as Promise<AdmissionsSearchResult>;

export const searchMemebr = (params: SearchParam) =>
  getRequest('/member/top', params) as Promise<MemberSearchResult>;
