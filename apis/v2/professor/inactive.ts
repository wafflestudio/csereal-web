import { getRequest } from '@/apis';
import { FETCH_TAG_FACULTY } from '@/constants/network';
import { Language } from '@/types/language';
import { SimpleEmeritusFaculty } from '@/apis/types/people';

export const getEmeritusFacultyList = (language: Language) =>
  getRequest<SimpleEmeritusFaculty[]>(
    '/v2/professor/inactive',
    { language },
    { next: { tags: [FETCH_TAG_FACULTY] } },
  );
