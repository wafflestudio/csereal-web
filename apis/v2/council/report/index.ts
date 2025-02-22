import { getRequest, postRequest } from '@/apis';
import { FETCH_TAG_COUNCIL_REPORT } from '@/constants/network';

interface GETReportResponse {
  total: number;
  reports: CouncilReport[];
}

export interface CouncilReport {
  id: number;
  title: string;
  sequence: number;
  name: string;
  createdAt: string;
  imageURL: string;
}

export const getCouncilReportList = () =>
  getRequest<GETReportResponse>('/v2/council/report', undefined, {
    next: { tags: [FETCH_TAG_COUNCIL_REPORT] },
  });

export const postCouncilReport = (body: FormData) =>
  postRequest('/v2/council/report', { body, jsessionID: true });
