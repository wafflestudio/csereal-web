import { putRequest } from '@/apis';

export const putOverview = (formData: FormData) =>
  putRequest('/v2/about/overview', { body: formData, jsessionID: true });
