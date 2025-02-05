import { getRequest } from '@/apis';
import { WithLanguage } from '@/types/language';

export const getUndergraduateRegularAdmission = () =>
  getRequest('/v2/admissions/undergraduate/regular-admission') as Promise<
    WithLanguage<{ description: string }>
  >;
