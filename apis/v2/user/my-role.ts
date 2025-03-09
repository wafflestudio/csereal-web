import { getRequest } from '@/apis';
import { Role } from '@/apis/types/role';

export const getMyRole = () =>
  getRequest<{ roles: Role[] }>('/v2/user/my-role', undefined, {
    cache: 'no-store',
    jsessionID: true,
  });
