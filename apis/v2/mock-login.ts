import { Role } from '@/apis/types/role';

export const getMockLogin = (role: Role) =>
  fetch(`https://cse-dev-waffle.bacchus.io/api/v2/mock-login?role=${role}`, {
    method: 'GET',
    cache: 'no-store',
  });
