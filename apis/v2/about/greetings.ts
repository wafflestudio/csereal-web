import { putRequest } from '@/apis';

export const putGreetings = (formData: FormData) =>
  putRequest('/v2/about/greetings', { body: formData, jsessionID: true });
