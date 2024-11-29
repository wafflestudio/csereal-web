import { putRequest } from '@/apis';

export const putDirections = (id: number, data: { koDescription: string; enDescription: string }) =>
  putRequest(`/v2/about/directions/${id}`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });
