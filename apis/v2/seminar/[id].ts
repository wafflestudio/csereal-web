import { deleteRequest, getRequest, patchRequest } from '@/apis';
import { PostSearchQueryParams } from '@/apis/types/post';
import { Seminar } from '@/apis/types/seminar';
import { FETCH_TAG_SEMINAR } from '@/constants/network';

export const getSeminarPost = async (id: number, params: PostSearchQueryParams) => {
  return getRequest(`/v2/seminar/${id}`, params, {
    next: { tags: [FETCH_TAG_SEMINAR] },
    jsessionID: true,
  }) as Promise<Seminar>;
};

export const patchSeminar = async (id: number, formData: FormData) => {
  await patchRequest(`/v2/seminar/${id}`, { body: formData, jsessionID: true });
};

export const deleteSeminar = async (id: number) =>
  deleteRequest(`/v2/seminar/${id}`, { jsessionID: true });
