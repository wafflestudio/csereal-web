import { getRequest } from '@/apis';
import { ScholarshipList, StudentType } from '@/apis/types/academics';
import { FETCH_TAG_SCHOLARSHIP } from '@/constants/network';

export const getScholarshipList = (type: StudentType) =>
  getRequest<ScholarshipList>(`/v1/academics/${type}/scholarship`, undefined, {
    next: { tags: [FETCH_TAG_SCHOLARSHIP] },
  });
