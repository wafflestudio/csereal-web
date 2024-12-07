import { getRequest } from '@/apis';
import { Direction } from '@/apis/types/about';
import { FETCH_TAG_DIRECTIONS } from '@/constants/network';
import { WithLanguage } from '@/types/language';

export const getDirections = () =>
  getRequest<WithLanguage<Direction>[]>('/v2/about/directions', undefined, {
    next: { tags: [FETCH_TAG_DIRECTIONS] },
  });
