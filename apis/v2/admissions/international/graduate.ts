import { getRequest } from '@/apis';
import { WithLanguage } from '@/types/language';

export const getInternationalgraduate = () =>
  getRequest('/v2/admissions/international/graduate') as Promise<
    WithLanguage<{ description: string }>
  >;
