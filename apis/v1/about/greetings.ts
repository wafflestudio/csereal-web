import { getRequest } from '@/apis';
import { FETCH_TAG_GREETINGS } from '@/constants/network';
import { AboutContent } from '@/apis/types/about';
import { Language } from '@/types/language';

export const getGreetings = (language: Language) =>
  getRequest<AboutContent>(`/v1/about/greetings?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_GREETINGS] },
  });
