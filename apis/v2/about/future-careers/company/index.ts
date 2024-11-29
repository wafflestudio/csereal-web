import { postRequest } from '@/apis';

export const postCareerCompany = (data: { name: string; url?: string; year: number }) =>
  postRequest('/v2/about/future-careers/company', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });
