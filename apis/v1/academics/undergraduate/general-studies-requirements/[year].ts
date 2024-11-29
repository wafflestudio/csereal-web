import { deleteRequest, putRequest } from '@/apis';
import { GeneralStudiesRequirement } from '@/types/academics';

export const putGeneralStudies = (data: GeneralStudiesRequirement) =>
  putRequest(`/v1/academics/undergraduate/general-studies-requirements/${data.year}`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description: data.description }),
    jsessionID: true,
  });

export const deleteGeneralStudies = async (year: number) =>
  deleteRequest(`/v1/academics/undergraduate/general-studies-requirements/${year}`, {
    jsessionID: true,
  });
