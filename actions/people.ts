'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { deleteFaculty, postFaculty, putFaculty } from '@/apis/people';

import { FETCH_TAG_FACULTY } from '@/constants/network';

import { getPath } from '@/utils/page';
import { emeritusFaculty, faculty } from '@/utils/segmentNode';

const facultyPath = getPath(faculty);
const emeritusFacultyPath = getPath(emeritusFaculty);

export const postFacultyAction = async (formData: { ko: FormData; en: FormData }) => {
  const [koResp] = await Promise.all([postFaculty(formData.ko), postFaculty(formData.en)]);

  revalidateTag(FETCH_TAG_FACULTY);
  redirect(`${koResp.status === 'INACTIVE' ? emeritusFacultyPath : facultyPath}/${koResp.id}`);
};

export const putFacultyAction = async (id: number, formData: FormData) => {
  await putFaculty(id, formData);

  revalidateTag(FETCH_TAG_FACULTY);
  redirect(`${facultyPath}/${id}`);
};

export const deleteFacultyAction = async (id: number) => {
  try {
    await deleteFaculty(id);
    revalidateTag(FETCH_TAG_FACULTY);
  } catch (error) {
    return { message: error instanceof Error ? error.message : '알 수 없는 에러: ' + error };
  }
  redirect(facultyPath);
};
