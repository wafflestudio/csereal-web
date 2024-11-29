import { getRequest } from '@/apis';

export const getUndergraduateEarlyAdmission = () =>
  getRequest('/v1/admissions/undergraduate/early-admission') as Promise<{ description: string }>;
