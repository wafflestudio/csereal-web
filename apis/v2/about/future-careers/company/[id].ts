import { deleteRequest, putRequest } from '@/apis';
import { FutureCareers } from '@/types/about';

export const putCareerCompany = (id: number, data: FutureCareers['companies'][number]) =>
  putRequest(`/v2/about/future-careers/company/${id}`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });

export const deleteCareerCompany = (id: number) =>
  deleteRequest(`/v2/about/future-careers/company/${id}`, { jsessionID: true });
