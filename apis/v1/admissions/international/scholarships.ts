import { getRequest } from '@/apis';

export const getInternationalScholarships = () =>
  getRequest('/v1/admissions/international/scholarships') as Promise<{ description: string }>;
