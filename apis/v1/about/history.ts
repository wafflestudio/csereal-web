import { getRequest } from '@/apis';
import { FETCH_TAG_HISTORY } from '@/constants/network';
import { AboutContent } from '@/apis/types/about';
import { Language } from '@/types/language';

export const getHistory = (language: Language) =>
  getRequest<AboutContent>(`/v1/about/history?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_HISTORY] },
  });
