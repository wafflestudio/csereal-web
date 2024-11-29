import { putRequest } from '@/apis';

export const putContact = (formData: FormData) =>
  putRequest('/v2/about/contact', { body: formData, jsessionID: true });
