import { FETCH_TAG_CLUB } from '@/constants/network';
import { AboutContent, Club, Direction, Facilities, FutureCareers } from '@/types/about';
import { WithLanguage } from '@/types/language';

import { getRequest, getRequestV2, postRequestV2 } from '.';

export const getOverview = () => getRequest<AboutContent>('/about/overview');

export const getGreetings = () => getRequest<AboutContent>('/about/greetings');

export const getHistory = () => getRequest<AboutContent>('/about/history');

export const getFutureCareeres = () => getRequest<FutureCareers>('/about/future-careers');

export const getFacilities = () => getRequest<Facilities>('/about/facilities');

export const getContact = () => getRequest<AboutContent>('/about/contact');

export const getDirections = () => getRequest<Direction[]>('/about/directions');

/** 동아리 */

export const getClubs = () =>
  getRequestV2<WithLanguage<Club>[]>('/about/student-clubs', undefined, {
    next: { tags: [FETCH_TAG_CLUB] },
  });

export const postClub = async (formData: FormData) =>
  postRequestV2('/about/student-clubs', { body: formData, jsessionID: true });
