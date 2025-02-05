import { getRequest } from '@/apis';
import { WithLanguage } from '@/types/language';

export const getInternationalScholarships = () =>
  getRequest('/v2/admissions/international/scholarships') as Promise<
    WithLanguage<{ description: string }>
  >;
