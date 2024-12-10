import { useLocale } from 'next-intl';

import { Language } from '@/types/language';

export const useTypedLocale = () => useLocale() as Language;
