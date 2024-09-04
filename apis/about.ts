import { FETCH_TAG_CLUB, FETCH_TAG_CONTACT, FETCH_TAG_HISTORY } from '@/constants/network';
import { AboutContent, Club, Direction, Facilities, FutureCareers } from '@/types/about';
import { Language, WithLanguage } from '@/types/language';

import { deleteRequestV2, getRequest, getRequestV2, postRequestV2, putRequestV2 } from '.';

export const getOverview = () => getRequest<AboutContent>('/about/overview');

export const getGreetings = () => getRequest<AboutContent>('/about/greetings');

export const getFutureCareeres = () => getRequest<FutureCareers>('/about/future-careers');

export const getFacilities = () => getRequest<Facilities>('/about/facilities');

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

export const postClub = async (formData: FormData) =>
  postRequestV2('/about/student-clubs', { body: formData, jsessionID: true });

export const putClub = (formData: FormData) =>
  putRequestV2('/about/student-clubs', { body: formData, jsessionID: true });

export const deleteClub = async (id: number) =>
  deleteRequestV2(`/about/student-clubs/${id}`, { jsessionID: true });

/** 연락처 */

export const getContact = (language: Language) =>
  getRequest<AboutContent>(`/about/contact?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_CONTACT] },
  });

export const putContact = (formData: FormData) =>
  putRequestV2('/about/contact', { body: formData, jsessionID: true });
