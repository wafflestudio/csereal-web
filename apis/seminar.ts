'use server';

import { FETCH_TAG_SEMINAR } from '@/constants/network';

import { PostSearchQueryParams } from '@/types/post';
import { Seminar, SeminarPreviewList } from '@/types/seminar';

import { postRequest, patchRequest, getRequest, deleteRequest } from '.';

const seminarPath = '/seminar';

// GET

export const getSeminarPosts = async (params: PostSearchQueryParams) => {
  return getRequest(seminarPath, params, {
    next: { tags: [FETCH_TAG_SEMINAR] },
    jsessionID: true,
  }) as Promise<SeminarPreviewList>;
};

export const getSeminarPost = async (id: number, params: PostSearchQueryParams) => {
  return getRequest(`${seminarPath}/${id}`, params, {
    next: { tags: [FETCH_TAG_SEMINAR] },
    jsessionID: true,
  }) as Promise<Seminar>;
};

// POST

export const postSeminar = async (formData: FormData) => {
  return postRequest(seminarPath, { body: formData, jsessionID: true }) as Promise<{ id: number }>;
};

// PATCH

export const patchSeminar = async (id: number, formData: FormData) => {
  await patchRequest(`${seminarPath}/${id}`, { body: formData, jsessionID: true });
};

// DELETE

export const deleteSeminar = async (id: number) =>
  deleteRequest(`${seminarPath}/${id}`, { jsessionID: true });
