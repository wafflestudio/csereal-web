import { putRequest } from '@/apis';
import { getRequest } from '@/apis';
import { FutureCareers } from '@/apis/types/about';
import { FETCH_TAG_CAREER } from '@/constants/network';
import { Language } from '@/types/language';

export const getFutureCareeres = (language: Language) =>
  getRequest<FutureCareers>(`/v2/about/future-careers?language=${language}`, undefined, {
    next: { tags: [FETCH_TAG_CAREER] },
  });

export const putFutureCareers = (data: { koDescription: string; enDescription: string }) =>
  putRequest('/v2/about/future-careers', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });
