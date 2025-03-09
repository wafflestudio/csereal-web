'use server';

import { deleteRequest, putRequest } from '@/apis';
import { StudentType } from '@/apis/types/academics';

import { PostType } from '.';

export const putAcademicsByPostType = async (
  studentType: StudentType,
  postType: PostType,
  year: number,
  body: FormData,
) =>
  await putRequest(`/v2/academics/${studentType}/${postType}/${year}`, { body, jsessionID: true });

export const deleteAcademicsByPostType = async (
  studentType: StudentType,
  postType: PostType,
  year: number,
) => deleteRequest(`/v2/academics/${studentType}/${postType}/${year}`, { jsessionID: true });
