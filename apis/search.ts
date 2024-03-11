import {
  AboutSearchResult,
  AcademicsSearchResult,
  AdmissionsSearchResult,
  MemberSearchResult,
  NewsSearchResult,
  NoticeSearchResult,
  ResearchSearchResult,
} from '@/types/search';

import { getRequest } from '.';

type SearchParam = { keyword: string; number: number; amount?: number };

export const searchAbout = (params: SearchParam) =>
  getRequest('/about/search/top', params) as Promise<AboutSearchResult>;

export const searchNotice = (params: SearchParam) =>
  getRequest('/notice/totalSearch', params) as Promise<NoticeSearchResult>;

export const searchNews = (params: SearchParam) =>
  getRequest('/news/totalSearch', params) as Promise<NewsSearchResult>;

export const searchMember = (params: SearchParam) =>
  getRequest('/member/search/top', params) as Promise<MemberSearchResult>;

export const searchResearch = (params: SearchParam) =>
  getRequest('/research/search/top', params) as Promise<ResearchSearchResult>;

export const searchAcademics = (params: SearchParam) =>
  getRequest('/academics/search/top', params) as Promise<AcademicsSearchResult>;

export const searchAdmissions = (params: SearchParam) =>
  getRequest('/admissions/search/top', params) as Promise<AdmissionsSearchResult>;
