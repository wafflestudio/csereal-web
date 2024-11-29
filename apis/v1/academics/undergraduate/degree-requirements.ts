import { getRequest, putRequest } from '@/apis';
import { FETCH_TAG_DEGREE } from '@/constants/network';
import { DegreeRequirements } from '@/types/academics';

export const getDegreeRequirements = () =>
  getRequest<DegreeRequirements>(`/v1/academics/undergraduate/degree-requirements`, undefined, {
    next: { tags: [FETCH_TAG_DEGREE] },
  });

export const putDegreeRequirements = (formData: FormData) =>
  putRequest(`/v1/academics/undergraduate/degree-requirements`, {
    body: formData,
    jsessionID: true,
  });
