import { getRequest } from '@/apis';
import { WithLanguage } from '@/types/language';

export const getGraduateRegularAdmission = () =>
  getRequest('/v2/admissions/graduate/regular-admission') as Promise<
    WithLanguage<{ description: string }>
  >;
