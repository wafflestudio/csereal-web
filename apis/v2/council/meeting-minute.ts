import { deleteRequest, postRequest, putRequest } from '@/apis';
import { getRequest } from '@/apis';
import { Minute } from '@/apis/types/council';
import { FETCH_TAG_COUNCIL_MINUTE } from '@/constants/network';

interface GETMinutesResponse {
  [year: string]: Minute[];
}

export const getCouncilMinutes = () =>
  getRequest<GETMinutesResponse>(`/v2/council/meeting-minute`, undefined, {
    next: { tags: [FETCH_TAG_COUNCIL_MINUTE] },
  });

export const getCouncilMinutesByYear = (year: number) =>
  getRequest<Minute[]>(`/v2/council/meeting-minute/${year}`, undefined, {
    next: { tags: [FETCH_TAG_COUNCIL_MINUTE] },
  });

export const postCouncilMinutesByYear = (year: number, formData: FormData) =>
  postRequest(`/v2/council/meeting-minute/${year}`, { body: formData, jsessionID: true });

export const getCouncilMinute = (year: number, index: number) =>
  getRequest<Minute>(`/v2/council/meeting-minute/${year}/${index}`, undefined, {
    next: { tags: [FETCH_TAG_COUNCIL_MINUTE] },
  });

export const putCouncilMinute = (year: number, index: number, formData: FormData) =>
  putRequest(`/v2/council/meeting-minute/${year}/${index}`, { body: formData, jsessionID: true });

export const deleteCouncilMinute = async (year: number, index: number) =>
  deleteRequest(`/v2/council/meeting-minute/${year}/${index}`, { jsessionID: true });
