import { FETCH_TAG_INTERNAL } from '@/constants/network';

import { getRequest, putRequest } from '..';

export const getInternal = () =>
  getRequest('/v1/internal', undefined, {
    next: { tags: [FETCH_TAG_INTERNAL] },
  }) as Promise<{ description: string }>;

export const putInternal = (description: string) =>
  putRequest('/v1/internal', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description }),
    jsessionID: true,
  });
