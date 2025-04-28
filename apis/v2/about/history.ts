import { putRequest } from '@/apis';
import { getRequest } from '@/apis';
import { AboutContent } from '@/apis/types/about';
import { FETCH_TAG_HISTORY } from '@/constants/network';
import { Language } from '@/types/language';

export const getHistory = (language: Language) =>
  getRequest<AboutContent>(`/v2/about/history?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_HISTORY] },
  });

export const putHistory = (formData: FormData) =>
  putRequest('/v2/about/history', { body: formData, jsessionID: true });
