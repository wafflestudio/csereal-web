import { deleteRequest, putRequest } from '@/apis';
import { WithLanguage } from '@/types/language';

export const putStaff = (ids: WithLanguage<number>, formData: FormData) =>
  putRequest(`'/v2/staff/${ids.ko}/${ids.en}`, { body: formData, jsessionID: true });

export const deleteStaff = (ids: WithLanguage<number>) =>
  deleteRequest(`/v2/staff/${ids.ko}/${ids.en}`, { jsessionID: true });
