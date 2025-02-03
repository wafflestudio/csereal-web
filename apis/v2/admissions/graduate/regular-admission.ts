import { getRequest } from '@/apis';

export const getGraduateRegularAdmission = () =>
  getRequest('/v2/admissions/graduate/regular-admission') as Promise<{ description: string }>;
