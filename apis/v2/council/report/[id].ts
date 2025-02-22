import { deleteRequest, getRequest, putRequest } from '@/apis';
import { FETCH_TAG_COUNCIL_REPORT } from '@/constants/network';

interface GETReportByIDResponse {
  id: number;
  title: string;
  description: string;
  sequence: number;
  name: string;
  createdAt: string;
  prevId: number;
  prevTitle: string;
  nextId: number;
  nextTitle: string;
}

export const getCouncilReport = (id: number) =>
  getRequest<GETReportByIDResponse>(`/v2/council/report/${id}`, undefined, {
    next: { tags: [FETCH_TAG_COUNCIL_REPORT] },
  });

export const putCouncilReport = (id: number, formData: FormData) =>
  putRequest<GETReportByIDResponse>(`/v2/council/report/${id}`, {
    body: formData,
    jsessionID: true,
  });

export const deleteCouncilReport = (id: number) => {
  return deleteRequest(`/v2/council/report/${id}`, { jsessionID: true });
};
