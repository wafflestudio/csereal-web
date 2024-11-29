import { getRequest } from '@/apis';

export const getInternationalExchangeVisiting = () =>
  getRequest('/v1/admissions/international/exchange-visiting') as Promise<{ description: string }>;
