import { getRequest } from '@/apis';
import { ResearchGroup } from '@/apis/types/research';
import { FETCH_TAG_GROUP } from '@/constants/network';
import { Language } from '@/types/language';

export const getResearchGroups = (language: Language) =>
  getRequest<ResearchGroup[]>(
    '/v2/research/groups',
    { language },
    { next: { tags: [FETCH_TAG_GROUP] } },
  );
