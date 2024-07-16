'use server';

import { getResearchLabs } from '@/apis/research';

import { Locale } from '@/types/locale';

export const getResearchLabsAction = async (locale: Locale) => {
  return await getResearchLabs(locale);
};
