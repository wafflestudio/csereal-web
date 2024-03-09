'use server';

import { PostSearchQueryParams } from '@/types/post';
import { Seminar, SeminarList } from '@/types/seminar';

import { postRequest, patchRequest, getRequest, deleteRequest } from './network/server';

const seminarPath = '/seminar';

// GET

export const getSeminarPosts = async (params: PostSearchQueryParams) => {
  return await getRequest<SeminarList>(seminarPath, params, { next: { tags: ['seminar'] } });
};

export const getSeminarPost = async (id: number, params: PostSearchQueryParams) => {
  return await getRequest<Seminar>(`${seminarPath}/${id}`, params, { next: { tags: ['seminar'] } });
};

// POST

export const postSeminar = async (formData: FormData) => {
  await postRequest(seminarPath, { body: formData });
};

// PATCH

export const patchSeminar = async (id: number, formData: FormData) => {
  await patchRequest(`${seminarPath}/${id}`, { body: formData });
};

// DELETE

export const deleteSeminar = async (id: number) => deleteRequest(`${seminarPath}/${id}`);
