'use server';

import { revalidateTag } from 'next/cache';

import { redirect } from '@/navigation';

import {
  deleteFaculty,
  deleteStaff,
  postFaculty,
  postStaff,
  putFaculty,
  putStaff,
} from '@/apis/people';

import { FETCH_TAG_FACULTY, FETCH_TAG_STAFF } from '@/constants/network';

import { Language, WithLanguage } from '@/types/language';
import { FacultyStatus } from '@/types/people';

import { getPath } from '@/utils/page';
import { emeritusFaculty, faculty, staff } from '@/utils/segmentNode';

import { withErrorHandler } from './errorHandler';

const facultyPath = getPath(faculty);
const emeritusFacultyPath = getPath(emeritusFaculty);
const staffPath = getPath(staff);

// export const postFacultyAction = withErrorHandler(async () => {
//   const mockResp = { status: 'ACTIVE', id: 3 }; // 임시
//   revalidateTag(FETCH_TAG_FACULTY);
//   redirect(`${mockResp.status === 'INACTIVE' ? emeritusFacultyPath : facultyPath}/${mockResp.id}`);
// });

// export const putFacultyAction = withErrorHandler(async (id: number) => {
//   revalidateTag(FETCH_TAG_FACULTY);
//   redirect(`${facultyPath}/${id}`);
// });

// export const deleteFacultyAction = withErrorHandler(async () => {
//   revalidateTag(FETCH_TAG_FACULTY);
//   redirect(facultyPath);
// });

const getFacultyPath = (status: FacultyStatus) =>
  status === 'INACTIVE' ? emeritusFacultyPath : facultyPath;

export const postFacultyAction = withErrorHandler(
  async (formData: FormData, language: Language) => {
    const res = await postFaculty(formData);
    revalidateTag(FETCH_TAG_FACULTY);
    redirect(`${getFacultyPath(res.ko.status)}/${res[language].id}`);
  },
);

export const putFacultyAction = withErrorHandler(
  async (
    ids: WithLanguage<number>,
    formData: FormData,
    language: Language,
    status: FacultyStatus,
  ) => {
    await putFaculty(ids, formData);

    revalidateTag(FETCH_TAG_FACULTY);
    redirect(`${getFacultyPath(status)}/${ids[language]}`);
  },
);

export const deleteFacultyAction = withErrorHandler(
  async (ids: WithLanguage<number>, status: FacultyStatus) => {
    await deleteFaculty(ids);

    revalidateTag(FETCH_TAG_FACULTY);
    redirect(getFacultyPath(status));
  },
);

export const postStaffAction = withErrorHandler(async (formData: FormData, language: Language) => {
  const res = await postStaff(formData);

  revalidateTag(FETCH_TAG_STAFF);
  redirect(`${staffPath}/${res[language].id}`);
});

export const putStaffAction = withErrorHandler(
  async (ids: WithLanguage<number>, formData: FormData, language: Language) => {
    await putStaff(ids, formData);

    revalidateTag(FETCH_TAG_STAFF);
    redirect(`${staffPath}/${ids[language]}`);
  },
);

export const deleteStaffAction = withErrorHandler(async (ids: WithLanguage<number>) => {
  await deleteStaff(ids);

  revalidateTag(FETCH_TAG_STAFF);
  redirect(staffPath);
});
