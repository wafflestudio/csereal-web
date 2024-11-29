import { FETCH_TAG_RECRUITMENT } from '@/constants/network';
import { GETFacultyRecruitmentResponse } from '@/types/post';

import { getRequest, putRequest } from '.';

export const getFacultyRecruitment = () =>
  getRequest<GETFacultyRecruitmentResponse>('/recruit', undefined, {
    next: { tags: [FETCH_TAG_RECRUITMENT] },
  });

export const putFacultyRecruitment = (formData: FormData) =>
  putRequest(`/recruit`, { body: formData, jsessionID: true });
