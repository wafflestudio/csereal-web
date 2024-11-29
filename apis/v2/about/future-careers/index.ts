import { putRequest } from '@/apis';

export const putFutureCareers = (data: { koDescription: string; enDescription: string }) =>
  putRequest('/v2/about/future-careers', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });
