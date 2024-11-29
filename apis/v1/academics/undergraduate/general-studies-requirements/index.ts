import { getRequest, postRequest } from '@/apis';
import { FETCH_TAG_GENERAL_STUDIES } from '@/constants/network';
import { GeneralStudiesRequirement, GeneralStudiesRequirements } from '@/types/academics';

export const getGeneralStudies = () =>
  getRequest<GeneralStudiesRequirements>(
    '/v1/academics/undergraduate/general-studies-requirements',
    undefined,
    {
      next: { tags: [FETCH_TAG_GENERAL_STUDIES] },
    },
  );

export const postGeneralStudies = (data: GeneralStudiesRequirement) =>
  postRequest('/v1/academics/undergraduate/general-studies-requirements', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, name: '필수 교양 과목' }),
    jsessionID: true,
  });
