import { getRequest } from '@/apis';
import { FutureCareers } from '@/apis/types/about';
import { FETCH_TAG_CAREER } from '@/constants/network';
import { Language } from '@/types/language';

/**
 * @deprecated v2 사용 요망
 */
export const getFutureCareeres = (language: Language) =>
  getRequest<FutureCareers>(`/v1/about/future-careers?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_CAREER] },
  });
