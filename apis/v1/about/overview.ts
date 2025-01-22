import { getRequest } from '@/apis';
import { AboutContent } from '@/apis/types/about';
import { FETCH_TAG_OVERVIEW } from '@/constants/network';
import { Language } from '@/types/language';

/**
 * @deprecated v2 사용 요망
 */
export const getOverview = (language: Language) =>
  getRequest<AboutContent>(`/v1/about/overview?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_OVERVIEW] },
  });
