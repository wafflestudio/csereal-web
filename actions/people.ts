'use server';

import { revalidateTag } from 'next/cache';

import { postFaculty } from '@/apis/v2/professor';
import { deleteFaculty, putFaculty } from '@/apis/v2/professor/[id_ko]/[id_en]';
import { postStaff } from '@/apis/v2/staff';
import { deleteStaff, putStaff } from '@/apis/v2/staff/[id_ko]/id_en';
import { FETCH_TAG_FACULTY, FETCH_TAG_STAFF } from '@/constants/network';
import { redirect } from '@/i18n/routing';
import { Language, WithLanguage } from '@/types/language';
import { FacultyStatus } from '@/types/people';
import { getPath } from '@/utils/page';
import { emeritusFaculty, faculty, staff } from '@/constants/segmentNode';

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
    // TODO: 현재 locale로 redirect
    redirect({ href: `${getFacultyPath(res.ko.status)}/${res[language].id}`, locale: 'ko' });
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
    redirect({ href: `${getFacultyPath(status)}/${ids[language]}`, locale: 'ko' });
  },
);

export const deleteFacultyAction = withErrorHandler(
  async (ids: WithLanguage<number>, status: FacultyStatus) => {
    await deleteFaculty(ids);

    revalidateTag(FETCH_TAG_FACULTY);
    redirect({ href: getFacultyPath(status), locale: 'ko' });
  },
);

export const postStaffAction = withErrorHandler(async (formData: FormData, language: Language) => {
  const res = await postStaff(formData);

  revalidateTag(FETCH_TAG_STAFF);
  redirect({ href: `${staffPath}/${res[language].id}`, locale: 'ko' });
});

export const putStaffAction = withErrorHandler(
  async (ids: WithLanguage<number>, formData: FormData, language: Language) => {
    await putStaff(ids, formData);

    revalidateTag(FETCH_TAG_STAFF);
    redirect({ href: `${staffPath}/${ids[language]}`, locale: 'ko' });
  },
);

export const deleteStaffAction = withErrorHandler(async (ids: WithLanguage<number>) => {
  await deleteStaff(ids);

  revalidateTag(FETCH_TAG_STAFF);
  redirect({ href: staffPath, locale: 'ko' });
});
