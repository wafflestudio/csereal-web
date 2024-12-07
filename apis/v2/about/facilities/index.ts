import { getRequest, postRequest } from '@/apis';
import { FETCH_TAG_FACILITIES } from '@/constants/network';
import { Facility } from '@/apis/types/about';
import { WithLanguage } from '@/types/language';

export const getFacilities = () =>
  getRequest<WithLanguage<Facility>[]>('/v2/about/facilities', undefined, {
    next: { tags: [FETCH_TAG_FACILITIES] },
  });

export const postFacility = (formData: FormData) =>
  postRequest('/v2/about/facilities', { body: formData, jsessionID: true });
