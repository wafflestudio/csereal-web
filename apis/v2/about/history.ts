import { putRequest } from '@/apis';

export const putHistory = (formData: FormData) =>
  putRequest('/v2/about/history', { body: formData, jsessionID: true });
