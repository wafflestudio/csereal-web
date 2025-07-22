import { Role } from '@/apis/types/role';
import { BASE_URL } from '@/constants/env';

export const getMockLogin = (role: Role) =>
  fetch(`${BASE_URL}/v2/mock-login?role=${role}`, {
    method: 'GET',
    cache: 'no-store',
  });
