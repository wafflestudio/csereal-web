import { getRequest, postRequest } from '@/apis';
import { FETCH_TAG_COUNCIL_INTRO } from '@/constants/network';

type GETReportResponse = {
  id: number;
  title: string;
  sequence: number;
  name: string;
  createdAt: string;
  imageURL: string;
}[];

export const getCouncilReport = () =>
  getRequest<GETReportResponse>('/v2/council/report', undefined, {
    next: { tags: [FETCH_TAG_COUNCIL_INTRO] },
  });

export const postCouncilReport = () => postRequest('/v2/council/report', {});
