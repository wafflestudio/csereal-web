import { getRequest } from '@/apis';
import { SimpleEmeritusFaculty } from '@/apis/types/people';
import { FETCH_TAG_FACULTY } from '@/constants/network';
import { Language } from '@/types/language';

export const getEmeritusFacultyList = (language: Language) =>
  getRequest<SimpleEmeritusFaculty[]>(
    '/v2/professor/inactive',
    { language },
    { next: { tags: [FETCH_TAG_FACULTY] } },
  );
