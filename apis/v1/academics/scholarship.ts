import { getRequest } from '@/apis';
import { FETCH_TAG_SCHOLARSHIP } from '@/constants/network';
import { ScholarshipList, StudentType } from '@/apis/types/academics';

export const getScholarshipList = (type: StudentType) =>
  getRequest<ScholarshipList>(`/v1/academics/${type}/scholarship`, undefined, {
    next: { tags: [FETCH_TAG_SCHOLARSHIP] },
  });
