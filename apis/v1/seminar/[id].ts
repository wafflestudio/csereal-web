import { deleteRequest, getRequest, patchRequest } from '@/apis';
import { FETCH_TAG_SEMINAR } from '@/constants/network';
import { PostSearchQueryParams } from '@/types/post';
import { Seminar } from '@/types/seminar';

export const getSeminarPost = async (id: number, params: PostSearchQueryParams) => {
  return getRequest(`/v1/seminar/${id}`, params, {
    next: { tags: [FETCH_TAG_SEMINAR] },
    jsessionID: true,
  }) as Promise<Seminar>;
};

export const patchSeminar = async (id: number, formData: FormData) => {
  await patchRequest(`/v1/seminar/${id}`, { body: formData, jsessionID: true });
};

export const deleteSeminar = async (id: number) =>
  deleteRequest(`/v1/seminar/${id}`, { jsessionID: true });
