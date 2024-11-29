import { deleteRequest, putRequest } from '@/apis';
import { WithLanguage } from '@/types/language';

export const putFaculty = (ids: WithLanguage<number>, formData: FormData) =>
  putRequest(`/v2/professor/${ids.ko}/${ids.en}`, { body: formData, jsessionID: true });

export const deleteFaculty = (ids: WithLanguage<number>) =>
  deleteRequest(`/v2/professor/${ids.ko}/${ids.en}`, { jsessionID: true });
