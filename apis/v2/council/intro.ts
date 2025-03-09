import { putRequest } from '@/apis';
import { getRequest } from '@/apis';
import { FETCH_TAG_COUNCIL_INTRO } from '@/constants/network';

export const getCouncilIntro = () =>
  getRequest<{ description: string; imageURL: string }>('/v2/council/intro', undefined, {
    next: { tags: [FETCH_TAG_COUNCIL_INTRO] },
  });

export const putCouncilIntro = (formData: FormData) =>
  putRequest('/v2/council/intro', { body: formData, jsessionID: true });
