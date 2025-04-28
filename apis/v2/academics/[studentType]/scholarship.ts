import { getRequest, postRequest, putRequest } from '@/apis';
import { ScholarshipList, StudentType } from '@/apis/types/academics';
import { ScholarshipFormData } from '@/app/[locale]/academics/components/scholarship/ScholarshipEditor';
import { FETCH_TAG_SCHOLARSHIP } from '@/constants/network';

export const getScholarshipList = (studentType: StudentType) =>
  getRequest<ScholarshipList>(`/v2/academics/${studentType}/scholarship`, undefined, {
    next: { tags: [FETCH_TAG_SCHOLARSHIP] },
  });

export const putScholarshipGuide = (studentType: StudentType, description: string) =>
  putRequest(`/v2/academics/${studentType}/scholarship`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description }),
    jsessionID: true,
  });

export const postScholarship = (studentType: StudentType, data: ScholarshipFormData) =>
  postRequest(`/v2/academics/${studentType}/scholarship`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });
