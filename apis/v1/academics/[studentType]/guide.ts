import { getRequest, putRequest } from '@/apis';
import { Guide, StudentType } from '@/apis/types/academics';
import { FETCH_TAG_GUIDE } from '@/constants/network';

export const getAcademicsGuide = (type: StudentType) =>
  getRequest<Guide>(`/v1/academics/${type}/guide`, undefined, {
    next: { tags: [FETCH_TAG_GUIDE] },
  });

export const putAcademicsGuide = (type: StudentType, formData: FormData) =>
  putRequest(`/v1/academics/${type}/guide`, { body: formData, jsessionID: true });
