import { getRequest } from '@/apis';

export const getInternationalUndergraduate = () =>
  getRequest('/v1/admissions/international/undergraduate') as Promise<{ description: string }>;
