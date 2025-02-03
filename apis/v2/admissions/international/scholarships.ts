import { getRequest } from '@/apis';

export const getInternationalScholarships = () =>
  getRequest('/v2/admissions/international/scholarships') as Promise<{ description: string }>;
