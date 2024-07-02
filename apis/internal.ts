import { getRequest, putRequest } from '.';

export const getInternal = () =>
  getRequest(
    '/internal',
    {},
    {
      next: { tags: ['internal'] },
    },
  ) as Promise<{ description: string }>;

export const putInternal = (description: string) =>
  putRequest('/internal', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description }),
    jsessionID: true,
  });
