import { getRequest } from '@/apis';
import { ResearchCenter } from '@/apis/types/research';
import { FETCH_TAG_CENTER } from '@/constants/network';
import { Language } from '@/types/language';

export const getResearchCenters = (language: Language) =>
  getRequest<ResearchCenter[]>(
    '/v2/research/centers',
    { language },
    { next: { tags: [FETCH_TAG_CENTER] } },
  );
