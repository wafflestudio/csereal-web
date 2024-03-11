'use server';

import { PostSearchQueryParams } from '@/types/post';
import { Seminar, SeminarList } from '@/types/seminar';

import { postRequest, patchRequest, getRequest, deleteRequest } from '.';

const seminarPath = '/seminar';

// GET

export const getSeminarPosts = async (params: PostSearchQueryParams) => {
  return getRequest(seminarPath, params, {
    next: { tags: ['seminar'] },
  }) as Promise<SeminarList>;
};

export const getSeminarPost = async (id: number, params: PostSearchQueryParams) => {
  return getRequest(`${seminarPath}/${id}`, params, {
    next: { tags: ['seminar'] },
  }) as Promise<Seminar>;
};

// POST

export const postSeminar = async (formData: FormData) => {
  return postRequest(seminarPath, { body: formData }) as Promise<{ id: number }>;
};

// PATCH

export const patchSeminar = async (id: number, formData: FormData) => {
  await patchRequest(`${seminarPath}/${id}`, { body: formData });
};

// DELETE

export const deleteSeminar = async (id: number) => deleteRequest(`${seminarPath}/${id}`);
