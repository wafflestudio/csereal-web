import { BASE_URL } from '@/constants/env';

export const getMockLogout = () =>
  fetch(`https://${BASE_URL}/api/v2/mock-logout`, {
    method: 'GET',
    cache: 'no-store',
  });
