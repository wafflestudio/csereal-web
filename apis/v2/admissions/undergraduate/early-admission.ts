import { getRequest } from '@/apis';

export const getUndergraduateEarlyAdmission = () =>
  getRequest('/v2/admissions/undergraduate/early-admission') as Promise<{ description: string }>;
