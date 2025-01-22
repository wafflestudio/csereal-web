import { getRequest } from '@/apis';
import { putRequest } from '@/apis';
import { AboutContent } from '@/apis/types/about';
import { FETCH_TAG_CONTACT } from '@/constants/network';
import { Language } from '@/types/language';

export const getContact = (language: Language) =>
  getRequest<AboutContent>(`/v2/about/contact?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_CONTACT] },
  });

export const putContact = (formData: FormData) =>
  putRequest('/v2/about/contact', { body: formData, jsessionID: true });
