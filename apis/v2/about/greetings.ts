import { getRequest } from '@/apis';
import { putRequest } from '@/apis';
import { AboutContent } from '@/apis/types/about';
import { FETCH_TAG_GREETINGS } from '@/constants/network';
import { Language } from '@/types/language';

export const getGreetings = (language: Language) =>
  getRequest<AboutContent>(`/v2/about/greetings?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_GREETINGS] },
  });

export const putGreetings = (formData: FormData) =>
  putRequest('/v2/about/greetings', { body: formData, jsessionID: true });
