import { getRequest } from '@/apis';

export const getInternationalExchangeVisiting = () =>
  getRequest('/v2/admissions/international/exchange-visiting') as Promise<{ description: string }>;
