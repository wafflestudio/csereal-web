import { getRequest } from '@/apis';
import { FETCH_TAG_CENTER } from '@/constants/network';
import { Language } from '@/types/language';
import { ResearchCenter } from '@/apis/types/research';

export const getResearchCenters = (language: Language) =>
  getRequest<ResearchCenter[]>(
    '/v2/research/centers',
    { language },
    { next: { tags: [FETCH_TAG_CENTER] } },
  );
