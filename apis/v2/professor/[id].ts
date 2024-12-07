import { getRequest } from '@/apis';
import { FETCH_TAG_FACULTY } from '@/constants/network';
import { WithLanguage } from '@/types/language';
import { EmeritusFaculty, Faculty } from '@/apis/types/people';

// TODO: 왜 별도 함수로 있죠...?
export const getFaculty = (id: number) =>
  getRequest<WithLanguage<Faculty>>(`/v2/professor/${id}`, undefined, {
    next: { tags: [FETCH_TAG_FACULTY] },
  });

export const getEmeritusFaculty = (id: number) =>
  getRequest<WithLanguage<EmeritusFaculty>>(`/v2/professor/${id}`, undefined, {
    next: { tags: [FETCH_TAG_FACULTY] },
  });
