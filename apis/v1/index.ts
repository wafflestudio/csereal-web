import { MainResponse } from '@/apis/types/main';
import { FETCH_TAG_NEWS, FETCH_TAG_NOTICE } from '@/constants/network';

import { getRequest } from '..';

export const getMain = () =>
  getRequest<MainResponse>('/v1', undefined, {
    next: { tags: [FETCH_TAG_NEWS, FETCH_TAG_NOTICE] },
  });
