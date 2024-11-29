import { getRequest } from '@/apis';

export const getUndergraduateRegularAdmission = () =>
  getRequest('/v1/admissions/undergraduate/regular-admission') as Promise<{ description: string }>;
