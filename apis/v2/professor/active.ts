import { getRequest } from '@/apis';
import { FacultyList } from '@/apis/types/people';
import { FETCH_TAG_FACULTY } from '@/constants/network';
import { Language } from '@/types/language';

export const getActiveFacultyList = (language: Language) =>
  getRequest<FacultyList>(
    '/v2/professor/active',
    { language },
    { next: { tags: [FETCH_TAG_FACULTY] } },
  );
