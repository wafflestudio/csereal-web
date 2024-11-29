import { deleteRequest, putRequest } from '@/apis';

export const putFacility = (id: number, formData: FormData) =>
  putRequest(`/v2/about/facilities/${id}`, { body: formData, jsessionID: true });

export const deleteFacility = (id: number) =>
  deleteRequest(`/v2/about/facilities/${id}`, { jsessionID: true });
