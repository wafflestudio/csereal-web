import { FETCH_TAG_NEWS, FETCH_TAG_NOTICE } from '@/constants/network';
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
  getRequest('/v1/about/search/top', params) as Promise<AboutSearchResult>;

export const searchNotice = (params: SearchParam) =>
  getRequest('/v1/notice/totalSearch', params, {
    next: { tags: [FETCH_TAG_NOTICE] },
  }) as Promise<NoticeSearchResult>;

export const searchNews = (params: SearchParam) =>
  getRequest('/v1/news/totalSearch', params, {
    next: { tags: [FETCH_TAG_NEWS] },
  }) as Promise<NewsSearchResult>;

export const searchMember = (params: SearchParam) =>
  getRequest('/v1/member/search/top', params) as Promise<MemberSearchResult>;

export const searchResearch = (params: SearchParam) =>
  getRequest('/v2/research/search/top', params) as Promise<ResearchSearchResult>;

export const searchAcademics = (params: SearchParam) =>
  getRequest('/v1/academics/search/top', params) as Promise<AcademicsSearchResult>;

export const searchAdmissions = (params: SearchParam) =>
  getRequest('/v1/admissions/search/top', params) as Promise<AdmissionsSearchResult>;
