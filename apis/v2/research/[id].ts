import { getRequest } from '@/apis';
import { FETCH_TAG_CENTER, FETCH_TAG_GROUP } from '@/constants/network';
import { WithLanguage } from '@/types/language';
import { ResearchCenter, ResearchGroup } from '@/apis/types/research';

export const getResearchGroup = (id: number) =>
  getRequest<WithLanguage<ResearchGroup>>(`/v2/research/${id}`, undefined, {
    next: { tags: [FETCH_TAG_GROUP] },
  });

export const getResearchCenter = (id: number) =>
  getRequest<WithLanguage<ResearchCenter>>(`/v2/research/${id}`, undefined, {
    next: { tags: [FETCH_TAG_CENTER] },
  });
