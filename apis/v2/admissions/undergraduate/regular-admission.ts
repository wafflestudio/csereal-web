import { getRequest } from '@/apis';

export const getUndergraduateRegularAdmission = () =>
  getRequest('/v2/admissions/undergraduate/regular-admission') as Promise<{ description: string }>;
