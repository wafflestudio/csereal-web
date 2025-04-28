import { getRequest } from '@/apis';
import { MainResponse } from '@/apis/types/main';
import { FETCH_TAG_NEWS, FETCH_TAG_NOTICE } from '@/constants/network';

export const getMain = () =>
  getRequest<MainResponse>('/v2', undefined, {
    next: { tags: [FETCH_TAG_NEWS, FETCH_TAG_NOTICE] },
  });
