import { getRequest } from '@/apis';

export const getInternationalgraduate = () =>
  getRequest('/v2/admissions/international/graduate') as Promise<{ description: string }>;
