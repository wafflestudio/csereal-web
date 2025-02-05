import { getRequest } from '@/apis';

export const getInternationalUndergraduate = () =>
  getRequest('/v2/admissions/international/undergraduate') as Promise<{ description: string }>;
