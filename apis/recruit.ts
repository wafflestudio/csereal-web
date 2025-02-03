import { GETFacultyRecruitmentResponse } from '@/apis/types/post';
import { FETCH_TAG_RECRUITMENT } from '@/constants/network';

import { getRequest, putRequest } from '.';

export const getFacultyRecruitment = () =>
  getRequest<GETFacultyRecruitmentResponse>('/v2/recruit', undefined, {
    next: { tags: [FETCH_TAG_RECRUITMENT] },
  });

export const putFacultyRecruitment = (formData: FormData) =>
  putRequest(`/v2/recruit`, { body: formData, jsessionID: true });
