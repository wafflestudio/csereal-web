import { getRequest } from '@/apis';
import { Staff } from '@/apis/types/people';
import { FETCH_TAG_STAFF } from '@/constants/network';
import { WithLanguage } from '@/types/language';

export const getStaff = (id: number) =>
  getRequest<WithLanguage<Staff>>(`/v2/staff/${id}`, undefined, {
    next: { tags: [FETCH_TAG_STAFF] },
  });
