import { getRequest, putRequest } from '@/apis';
import { Guide, StudentType } from '@/apis/types/academics';
import { FETCH_TAG_GUIDE } from '@/constants/network';

export const getAcademicsGuide = (studentType: StudentType) =>
  getRequest<Guide>(`/v2/academics/${studentType}/guide`, undefined, {
    next: { tags: [FETCH_TAG_GUIDE] },
  });

export const putAcademicsGuide = (studentType: StudentType, formData: FormData) =>
  putRequest(`/v2/academics/${studentType}/guide`, { body: formData, jsessionID: true });
