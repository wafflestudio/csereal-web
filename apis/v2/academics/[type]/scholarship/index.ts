import { postRequest, putRequest } from '@/apis';
import { StudentType } from '@/types/academics';

export const putScholarshipGuide = (type: StudentType, description: string) =>
  putRequest(`/v2/academics/${type}/scholarship`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description }),
    jsessionID: true,
  });

export const postScholarship = (
  type: StudentType,
  data: { koName: string; koDescription: string; enName: string; enDescription: string },
) =>
  postRequest(`/v2/academics/${type}/scholarship`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });
