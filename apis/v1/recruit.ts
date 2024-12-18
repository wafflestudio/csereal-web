import { GETFacultyRecruitmentResponse } from '@/apis/types/post';
import { FETCH_TAG_RECRUITMENT } from '@/constants/network';

import { getRequest, putRequest } from '..';

export const getFacultyRecruitment = () =>
  getRequest<GETFacultyRecruitmentResponse>('/v1/recruit', undefined, {
    next: { tags: [FETCH_TAG_RECRUITMENT] },
  });

export const putFacultyRecruitment = (formData: FormData) =>
  putRequest(`/v1/recruit`, { body: formData, jsessionID: true });
