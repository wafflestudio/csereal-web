import { getRequest, postRequest } from '@/apis';
import { FETCH_TAG_CURRICULUM } from '@/constants/network';
import { Curriculum } from '@/types/academics';

export const getCurriculum = () =>
  getRequest<Curriculum[]>('/v1/academics/undergraduate/curriculum', undefined, {
    next: { tags: [FETCH_TAG_CURRICULUM] },
  });

export const postCurriculum = (data: Curriculum) =>
  postRequest('/v1/academics/undergraduate/curriculum', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, name: '전공 이수 표준 형태' }),
    jsessionID: true,
  });