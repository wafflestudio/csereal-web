import { getRequest, postRequest } from '@/apis';
import { GeneralStudiesRequirement, GeneralStudiesRequirements } from '@/apis/types/academics';
import { FETCH_TAG_GENERAL_STUDIES } from '@/constants/network';

export const getGeneralStudies = () =>
  getRequest<GeneralStudiesRequirements>(
    '/v2/academics/undergraduate/general-studies-requirements',
    undefined,
    {
      next: { tags: [FETCH_TAG_GENERAL_STUDIES] },
    },
  );

export const postGeneralStudies = (data: GeneralStudiesRequirement) =>
  postRequest('/v2/academics/undergraduate/general-studies-requirements', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, name: '필수 교양 과목' }),
    jsessionID: true,
  });
