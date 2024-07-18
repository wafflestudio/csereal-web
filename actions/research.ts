'use server';

import { getResearchLabs } from '@/apis/research';

import { Language } from '@/types/language';

export const getResearchLabsAction = async (locale: Language) => {
  return await getResearchLabs(locale);
};
