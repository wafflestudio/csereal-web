import { getRequest, postRequest } from '@/apis';
import { FETCH_TAG_LAB } from '@/constants/network';
import { Language, WithLanguage } from '@/types/language';
import { ResearchLab, SimpleResearchLab } from '@/types/research';

export const getResearchLabs = (language: Language) =>
  getRequest<SimpleResearchLab[]>(
    '/v2/research/lab',
    { language },
    { next: { tags: [FETCH_TAG_LAB] } },
  );

export const postResearchLab = (formData: FormData) =>
  postRequest<WithLanguage<ResearchLab>>('/v2/research/lab', { body: formData, jsessionID: true });
