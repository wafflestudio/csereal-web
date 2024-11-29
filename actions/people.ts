'use server';

import { revalidateTag } from 'next/cache';

import { postFaculty } from '@/apis/v2/professor';
import { deleteFaculty, putFaculty } from '@/apis/v2/professor/[id_ko]/[id_en]';
import { postStaff } from '@/apis/v2/staff';
import { deleteStaff, putStaff } from '@/apis/v2/staff/[id_ko]/id_en';
import { FETCH_TAG_FACULTY, FETCH_TAG_STAFF } from '@/constants/network';
import { redirect } from '@/navigation';
import { Language, WithLanguage } from '@/types/language';
import { FacultyStatus } from '@/types/people';
import { getPath } from '@/utils/page';
import { emeritusFaculty, faculty, staff } from '@/utils/segmentNode';

import { withErrorHandler } from './errorHandler';

const facultyPath = getPath(faculty);
const emeritusFacultyPath = getPath(emeritusFaculty);
const staffPath = getPath(staff);

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
