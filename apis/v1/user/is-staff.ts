import { getRequest } from '@/apis';

export const getIsStaff = () =>
  getRequest<{ isStaff: boolean }>('/v1/user/is-staff', undefined, {
    cache: 'no-store',
    jsessionID: true,
  });
