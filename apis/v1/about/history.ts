import { getRequest } from '@/apis';
import { AboutContent } from '@/apis/types/about';
import { FETCH_TAG_HISTORY } from '@/constants/network';
import { Language } from '@/types/language';

/**
 * @deprecated v2 사용 요망
 */
export const getHistory = (language: Language) =>
  getRequest<AboutContent>(`/v1/about/history?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_HISTORY] },
  });
