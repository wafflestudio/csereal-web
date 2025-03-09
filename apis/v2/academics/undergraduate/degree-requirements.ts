import { getRequest, putRequest } from '@/apis';
import { DegreeRequirements } from '@/apis/types/academics';
import { FETCH_TAG_DEGREE } from '@/constants/network';

export const getDegreeRequirements = () =>
  getRequest<DegreeRequirements>(`/v2/academics/undergraduate/degree-requirements`, undefined, {
    next: { tags: [FETCH_TAG_DEGREE] },
  });

export const putDegreeRequirements = (formData: FormData) =>
  putRequest(`/v2/academics/undergraduate/degree-requirements`, {
    body: formData,
    jsessionID: true,
  });
