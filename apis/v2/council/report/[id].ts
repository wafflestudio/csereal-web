import { deleteRequest, getRequest, putRequest } from '@/apis';
import { Council } from '@/apis/types/council';
import { FETCH_TAG_COUNCIL_REPORT } from '@/constants/network';

export const getCouncilReport = (id: number) =>
  getRequest<Council>(`/v2/council/report/${id}`, undefined, {
    next: { tags: [FETCH_TAG_COUNCIL_REPORT] },
  });

export const putCouncilReport = (id: number, formData: FormData) =>
  putRequest<Council>(`/v2/council/report/${id}`, {
    body: formData,
    jsessionID: true,
  });

export const deleteCouncilReport = (id: number) => {
  return deleteRequest(`/v2/council/report/${id}`, { jsessionID: true });
};
