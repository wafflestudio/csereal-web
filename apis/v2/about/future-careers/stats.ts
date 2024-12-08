import { postRequest, putRequest } from '@/apis';

import { Stat } from './types';

export interface CareerStat {
  year: number;
  statList: Stat[];
}

export const postCareerStat = (data: CareerStat) =>
  postRequest('/v2/about/future-careers/stats', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });

export const putCareerStat = (data: CareerStat) =>
  putRequest('/v2/about/future-careers/stats', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });
