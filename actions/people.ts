'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import {
  deleteFaculty,
  deleteStaff,
  postFaculty,
  postStaff,
  putFaculty,
  putStaff,
} from '@/apis/people';

import { FETCH_TAG_FACULTY, FETCH_TAG_STAFF } from '@/constants/network';

import { getPath } from '@/utils/page';
import { emeritusFaculty, faculty, staff } from '@/utils/segmentNode';

import { withErrorHandler } from './errorHandler';

const facultyPath = getPath(faculty);
const emeritusFacultyPath = getPath(emeritusFaculty);
const staffPath = getPath(staff);

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

export const postStaffAction = withErrorHandler(
  async (formData: { ko: FormData; en: FormData }) => {
    await Promise.all([postStaff(formData.ko), postStaff(formData.en)]);
    revalidateTag(FETCH_TAG_STAFF);
    redirect(staffPath);
  },
);

export const putStaffAction = withErrorHandler(async (id: number, formData: FormData) => {
  await putStaff(id, formData);
  revalidateTag(FETCH_TAG_STAFF);
  redirect(`${staffPath}/${id}`);
});

export const deleteStaffAction = withErrorHandler(async (id: { ko: number; en: number }) => {
  await Promise.all([deleteStaff(id.ko), deleteStaff(id.en)]);
  revalidateTag(FETCH_TAG_STAFF);
  redirect(staffPath);
});
