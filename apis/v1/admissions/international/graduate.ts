import { getRequest } from '@/apis';

export const getInternationalgraduate = () =>
  getRequest('/v1/admissions/international/graduate') as Promise<{ description: string }>;
