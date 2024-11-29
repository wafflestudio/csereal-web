import { getRequest } from '@/apis';
import { FETCH_TAG_CAREER } from '@/constants/network';
import { FutureCareers } from '@/types/about';
import { Language } from '@/types/language';

export const getFutureCareeres = (language: Language) =>
  getRequest<FutureCareers>(`/v1/about/future-careers?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_CAREER] },
  });
