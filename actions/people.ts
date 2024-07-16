'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { deleteFaculty, postFaculty, putFaculty } from '@/apis/people';

import { FETCH_TAG_FACULTY } from '@/constants/network';

import { getPath } from '@/utils/page';
import { emeritusFaculty, faculty } from '@/utils/segmentNode';

import { withErrorHandler } from './errorHandler';

const facultyPath = getPath(faculty);
const emeritusFacultyPath = getPath(emeritusFaculty);

export const postFacultyAction = withErrorHandler(
  async (formData: { ko: FormData; en: FormData }) => {
    const [koResp] = await Promise.all([postFaculty(formData.ko), postFaculty(formData.en)]);
    revalidateTag(FETCH_TAG_FACULTY);
    redirect(`${koResp.status === 'INACTIVE' ? emeritusFacultyPath : facultyPath}/${koResp.id}`);
  },
);

export const putFacultyAction = withErrorHandler(async (id: number, formData: FormData) => {
  await putFaculty(id, formData);
  revalidateTag(FETCH_TAG_FACULTY);
  redirect(`${facultyPath}/${id}`);
});

export const deleteFacultyAction = withErrorHandler(async (id: { ko: number; en: number }) => {
  await Promise.all([deleteFaculty(id.ko), deleteFaculty(id.en)]);
  revalidateTag(FETCH_TAG_FACULTY);
  redirect(facultyPath);
});
