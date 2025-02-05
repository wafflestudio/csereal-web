import { getRequest } from '@/apis';
import { WithLanguage } from '@/types/language';

export const getInternationalUndergraduate = () =>
  getRequest('/v2/admissions/international/undergraduate') as Promise<
    WithLanguage<{ description: string }>
  >;
