import { getRequest } from '@/apis';
import { WithLanguage } from '@/types/language';

export const getUndergraduateEarlyAdmission = () =>
  getRequest('/v2/admissions/undergraduate/early-admission') as Promise<
    WithLanguage<{ description: string }>
  >;
