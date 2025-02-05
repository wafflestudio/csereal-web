import { getRequest } from '@/apis';
import { WithLanguage } from '@/types/language';

export const getInternationalExchangeVisiting = () =>
  getRequest('/v2/admissions/international/exchange-visiting') as Promise<
    WithLanguage<{ description: string }>
  >;
