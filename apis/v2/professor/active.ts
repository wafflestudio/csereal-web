import { getRequest } from '@/apis';
import { FETCH_TAG_FACULTY } from '@/constants/network';
import { Language } from '@/types/language';
import { FacultyList } from '@/apis/types/people';

export const getActiveFacultyList = (language: Language) =>
  getRequest<FacultyList>(
    '/v2/professor/active',
    { language },
    { next: { tags: [FETCH_TAG_FACULTY] } },
  );
