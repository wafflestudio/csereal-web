import { getRequest } from '@/apis';
import { AboutContent } from '@/apis/types/about';
import { FETCH_TAG_GREETINGS } from '@/constants/network';
import { Language } from '@/types/language';

/**
 * @deprecated v2 사용 요망
 */
export const getGreetings = (language: Language) =>
  getRequest<AboutContent>(`/v1/about/greetings?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_GREETINGS] },
  });
