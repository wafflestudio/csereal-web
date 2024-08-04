'use server';

import { revalidateTag } from 'next/cache';

import { redirect } from '@/navigation';

import { postStaff } from '@/apis/people';

import { FETCH_TAG_FACULTY, FETCH_TAG_STAFF } from '@/constants/network';

import { getPath } from '@/utils/page';
import { emeritusFaculty, faculty, staff } from '@/utils/segmentNode';

import { withErrorHandler } from './errorHandler';

const facultyPath = getPath(faculty);
const emeritusFacultyPath = getPath(emeritusFaculty);
const staffPath = getPath(staff);

export const postFacultyAction = withErrorHandler(async () => {
  const mockResp = { status: 'ACTIVE', id: 3 }; // 임시
  revalidateTag(FETCH_TAG_FACULTY);
  redirect(`${mockResp.status === 'INACTIVE' ? emeritusFacultyPath : facultyPath}/${mockResp.id}`);
});

export const putFacultyAction = withErrorHandler(async (id: number) => {
  revalidateTag(FETCH_TAG_FACULTY);
  redirect(`${facultyPath}/${id}`);
});

export const deleteFacultyAction = withErrorHandler(async () => {
  revalidateTag(FETCH_TAG_FACULTY);
  redirect(facultyPath);
});

export const postStaffAction = withErrorHandler(async (formData: FormData) => {
  const res = await postStaff(formData);

  revalidateTag(FETCH_TAG_STAFF);
  redirect(`${staffPath}/${res.ko.id}`);
});

export const putStaffAction = withErrorHandler(async (id: number) => {
  revalidateTag(FETCH_TAG_STAFF);
  redirect(`${staffPath}/${id}`);
});

export const deleteStaffAction = withErrorHandler(async () => {
  revalidateTag(FETCH_TAG_STAFF);
  redirect(staffPath);
});
