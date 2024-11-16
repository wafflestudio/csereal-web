import { FETCH_TAG_RECRUITMENT } from '@/constants/network';

import { getRequest } from '.';

export const getFacultyRecruitment = () =>
  getRequest<{ title: string; description: string; mainImage: string }>('/recruit', undefined, {
    next: { tags: [FETCH_TAG_RECRUITMENT] },
  });
