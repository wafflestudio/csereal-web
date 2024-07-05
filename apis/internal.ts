import { FETCH_TAG_INTERNAL } from '@/constants/network';

import { getRequest, putRequest } from '.';

export const getInternal = () =>
  getRequest('/internal', undefined, {
    next: { tags: [FETCH_TAG_INTERNAL] },
  }) as Promise<{ description: string }>;

export const putInternal = (description: string) =>
  putRequest('/internal', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description }),
    jsessionID: true,
  });
