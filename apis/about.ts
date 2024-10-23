import {
  FETCH_TAG_CLUB,
  FETCH_TAG_CONTACT,
  FETCH_TAG_FACILITIES,
  FETCH_TAG_GREETINGS,
  FETCH_TAG_HISTORY,
  FETCH_TAG_OVERVIEW,
} from '@/constants/network';
import { AboutContent, Club, Direction, Facility, FutureCareers } from '@/types/about';
import { Language, WithLanguage } from '@/types/language';

import { deleteRequestV2, getRequest, getRequestV2, postRequestV2, putRequestV2 } from '.';

/** 학부 소개 */

export const getOverview = (language: Language) =>
  getRequest<AboutContent>(`/about/overview?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_OVERVIEW] },
  });

export const putOverview = (formData: FormData) =>
  putRequestV2('/about/overview', { body: formData, jsessionID: true });

/** 학부장 인사말 */

export const getGreetings = (language: Language) =>
  getRequest<AboutContent>(`/about/greetings?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_GREETINGS] },
  });

export const putGreetings = (formData: FormData) =>
  putRequestV2('/about/greetings', { body: formData, jsessionID: true });

export const getFutureCareeres = () => getRequest<FutureCareers>('/about/future-careers');

export const getDirections = () => getRequest<Direction[]>('/about/directions');

/** 연혁 */

export const getHistory = (language: Language) =>
  getRequest<AboutContent>(`/about/history?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_HISTORY] },
  });

export const putHistory = (formData: FormData) =>
  putRequestV2('/about/history', { body: formData, jsessionID: true });

/** 동아리 */

export const getClubs = () =>
  getRequestV2<WithLanguage<Club>[]>('/about/student-clubs', undefined, {
    next: { tags: [FETCH_TAG_CLUB] },
  });

export const postClub = (formData: FormData) =>
  postRequestV2('/about/student-clubs', { body: formData, jsessionID: true });

export const putClub = (formData: FormData) =>
  putRequestV2('/about/student-clubs', { body: formData, jsessionID: true });

export const deleteClub = (id: number) =>
  deleteRequestV2(`/about/student-clubs/${id}`, { jsessionID: true });

/** 시설 안내 */

export const getFacilities = () =>
  getRequestV2<WithLanguage<Facility>[]>('/about/facilities', undefined, {
    next: { tags: [FETCH_TAG_FACILITIES] },
  });

export const postFacility = (formData: FormData) =>
  postRequestV2('/about/facilities', { body: formData, jsessionID: true });

export const putFacility = (id: number, formData: FormData) =>
  putRequestV2(`/about/facilities/${id}`, { body: formData, jsessionID: true });

export const deleteFacility = (id: number) =>
  deleteRequestV2(`/about/facilities/${id}`, { jsessionID: true });

/** 연락처 */

export const getContact = (language: Language) =>
  getRequest<AboutContent>(`/about/contact?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_CONTACT] },
  });

export const putContact = (formData: FormData) =>
  putRequestV2('/about/contact', { body: formData, jsessionID: true });
