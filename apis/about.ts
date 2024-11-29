import { CareerStatEditorContent } from '@/components/editor/CareerStatEditor';
import {
  FETCH_TAG_CAREER,
  FETCH_TAG_CLUB,
  FETCH_TAG_CONTACT,
  FETCH_TAG_DIRECTIONS,
  FETCH_TAG_FACILITIES,
  FETCH_TAG_GREETINGS,
  FETCH_TAG_HISTORY,
  FETCH_TAG_OVERVIEW,
} from '@/constants/network';
import { AboutContent, Club, Direction, Facility, FutureCareers } from '@/types/about';
import { Language, WithLanguage } from '@/types/language';

import { deleteRequest, getRequest, postRequest, putRequest } from '.';

/** 학부 소개 */

export const getOverview = (language: Language) =>
  getRequest<AboutContent>(`/about/overview?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_OVERVIEW] },
  });

export const putOverview = (formData: FormData) =>
  putRequest('/v2/about/overview', { body: formData, jsessionID: true });

/** 학부장 인사말 */

export const getGreetings = (language: Language) =>
  getRequest<AboutContent>(`/v1/about/greetings?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_GREETINGS] },
  });

export const putGreetings = (formData: FormData) =>
  putRequest('/v2/about/greetings', { body: formData, jsessionID: true });

/** 연혁 */

export const getHistory = (language: Language) =>
  getRequest<AboutContent>(`/v1/about/history?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_HISTORY] },
  });

export const putHistory = (formData: FormData) =>
  putRequest('/v2/about/history', { body: formData, jsessionID: true });

/** 졸업생 진로  */

export const getFutureCareeres = (language: Language) =>
  getRequest<FutureCareers>(`/v1/about/future-careers?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_CAREER] },
  });

export const putCareerDescription = (data: { koDescription: string; enDescription: string }) =>
  putRequest('/v2/about/future-careers', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });

export const postCareerStat = (data: CareerStatEditorContent) =>
  postRequest('/v2/about/future-careers/stats', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });

export const putCareerStat = (data: CareerStatEditorContent) =>
  putRequest('/v2/about/future-careers/stats', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });

export const postCareerCompany = (data: { name: string; url?: string; year: number }) =>
  postRequest('/v2/about/future-careers/company', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });

export const putCareerCompany = (id: number, data: FutureCareers['companies'][number]) =>
  putRequest(`/v2/about/future-careers/company/${id}`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });

export const deleteCareerCompany = (id: number) =>
  deleteRequest(`/v2/about/future-careers/company/${id}`, { jsessionID: true });

/** 동아리 */

export const getClubs = () =>
  getRequest<WithLanguage<Club>[]>('/v2/about/student-clubs', undefined, {
    next: { tags: [FETCH_TAG_CLUB] },
  });

export const postClub = (formData: FormData) =>
  postRequest('/v2/about/student-clubs', { body: formData, jsessionID: true });

export const putClub = (formData: FormData) =>
  putRequest('/v2/about/student-clubs', { body: formData, jsessionID: true });

export const deleteClub = (id: number) =>
  deleteRequest(`/v2/about/student-clubs/${id}`, { jsessionID: true });

/** 시설 안내 */

export const getFacilities = () =>
  getRequest<WithLanguage<Facility>[]>('/v2/about/facilities', undefined, {
    next: { tags: [FETCH_TAG_FACILITIES] },
  });

export const postFacility = (formData: FormData) =>
  postRequest('/v2/about/facilities', { body: formData, jsessionID: true });

export const putFacility = (id: number, formData: FormData) =>
  putRequest(`/v2/about/facilities/${id}`, { body: formData, jsessionID: true });

export const deleteFacility = (id: number) =>
  deleteRequest(`/v2/about/facilities/${id}`, { jsessionID: true });

/** 연락처 */

export const getContact = (language: Language) =>
  getRequest<AboutContent>(`/v1/about/contact?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_CONTACT] },
  });

export const putContact = (formData: FormData) =>
  putRequest('/v2/about/contact', { body: formData, jsessionID: true });

/** 찾아오는 길 */

export const getDirections = () =>
  getRequest<WithLanguage<Direction>[]>('/v2/about/directions', undefined, {
    next: { tags: [FETCH_TAG_DIRECTIONS] },
  });

export const putDirections = (id: number, data: { koDescription: string; enDescription: string }) =>
  putRequest(`/v2/about/directions/${id}`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });
