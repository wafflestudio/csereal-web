import { getRequest } from '@/apis';
import { FETCH_TAG_LAB } from '@/constants/network';
import { WithLanguage } from '@/types/language';
import { ResearchLab } from '@/apis/types/research';

export const getResearchLab = (id: number) =>
  getRequest<WithLanguage<ResearchLab>>(`/v2/research/lab/${id}`, undefined, {
    next: { tags: [FETCH_TAG_LAB] },
  });
