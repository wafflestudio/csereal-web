import { getRequest } from '@/apis';
import { FETCH_TAG_GROUP } from '@/constants/network';
import { Language } from '@/types/language';
import { ResearchGroup } from '@/types/research';

export const getResearchGroups = (language: Language) =>
  getRequest<ResearchGroup[]>(
    '/v2/research/groups',
    { language },
    { next: { tags: [FETCH_TAG_GROUP] } },
  );
