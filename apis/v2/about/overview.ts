import { putRequest } from '@/apis';
import { getRequest } from '@/apis';
import { AboutContent } from '@/apis/types/about';
import { FETCH_TAG_OVERVIEW } from '@/constants/network';
import { Language } from '@/types/language';

export const getOverview = (language: Language) =>
  getRequest<AboutContent>(`/v2/about/overview?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_OVERVIEW] },
  });

export const putOverview = (formData: FormData) =>
  putRequest('/v2/about/overview', { body: formData, jsessionID: true });
