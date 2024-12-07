import { getRequest, postRequest, putRequest } from '@/apis';
import { FETCH_TAG_CLUB } from '@/constants/network';
import { Club } from '@/apis/types/about';
import { WithLanguage } from '@/types/language';

export const getClubs = () =>
  getRequest<WithLanguage<Club>[]>('/v2/about/student-clubs', undefined, {
    next: { tags: [FETCH_TAG_CLUB] },
  });

export const postClub = (formData: FormData) =>
  postRequest('/v2/about/student-clubs', { body: formData, jsessionID: true });

export const putClub = (formData: FormData) =>
  putRequest('/v2/about/student-clubs', { body: formData, jsessionID: true });
