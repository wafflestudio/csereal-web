import { getRequest } from '@/apis';

export const getGraduateRegularAdmission = () =>
  getRequest('/v1/admissions/graduate/regular-admission') as Promise<{ description: string }>;
