import { getRequest, postRequest } from '@/apis';
import { SimpleStaff } from '@/apis/types/people';
import { FETCH_TAG_STAFF } from '@/constants/network';
import { Language, WithLanguage } from '@/types/language';

export const getStaffList = (language: Language) =>
  getRequest<SimpleStaff[]>('/v2/staff', { language }, { next: { tags: [FETCH_TAG_STAFF] } });

export const postStaff = (formData: FormData) =>
  postRequest('/v2/staff', { body: formData, jsessionID: true }) as Promise<
    WithLanguage<{ id: number }>
  >;
