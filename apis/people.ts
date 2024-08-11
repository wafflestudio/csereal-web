import { FETCH_TAG_FACULTY, FETCH_TAG_STAFF } from '@/constants/network';

import { Language, WithLanguage } from '@/types/language';
import {
  EmeritusFaculty,
  Faculty,
  FacultyList,
  FacultyStatus,
  SimpleEmeritusFaculty,
  SimpleStaff,
  Staff,
} from '@/types/people';

import { deleteRequest2, getRequest2, postRequest2, putRequest2 } from '.';

const facultyPath = '/professor';
const staffPath = '/staff';

// TODO: /api/v1 v2 통합되면 request 메소드 원래대로 교체

/* 교수진 */

export const getActiveFacultyList = (language: Language) =>
  getRequest2<FacultyList>(
    '/professor/active',
    { language },
    { next: { tags: [FETCH_TAG_FACULTY] } },
  );

export const getFaculty = (id: number) =>
  getRequest2<WithLanguage<Faculty>>(`/professor/${id}`, undefined, {
    next: { tags: [FETCH_TAG_FACULTY] },
  });

export const getEmeritusFacultyList = (language: Language) =>
  getRequest2<SimpleEmeritusFaculty[]>(
    '/professor/inactive',
    { language },
    { next: { tags: [FETCH_TAG_FACULTY] } },
  );

export const getEmeritusFaculty = (id: number) =>
  getRequest2<WithLanguage<EmeritusFaculty>>(`/professor/${id}`, undefined, {
    next: { tags: [FETCH_TAG_FACULTY] },
  });

export const postFaculty = async (formData: FormData) =>
  postRequest2(facultyPath, { body: formData, jsessionID: true }) as Promise<
    WithLanguage<{ id: number; status: FacultyStatus }>
  >;

export const putFaculty = async (ids: WithLanguage<number>, formData: FormData) =>
  await putRequest2(`${facultyPath}/${ids.ko}/${ids.en}`, { body: formData, jsessionID: true });

export const deleteFaculty = async (ids: WithLanguage<number>) =>
  deleteRequest2(`${facultyPath}/${ids.ko}/${ids.en}`, { jsessionID: true });

/* 행정직원 */

export const getStaffList = (language: Language) =>
  getRequest2<SimpleStaff[]>('/staff', { language }, { next: { tags: [FETCH_TAG_STAFF] } });

export const getStaff = (id: number) =>
  getRequest2<WithLanguage<Staff>>(`/staff/${id}`, undefined, {
    next: { tags: [FETCH_TAG_STAFF] },
  });

export const postStaff = async (formData: FormData) =>
  postRequest2(staffPath, { body: formData, jsessionID: true }) as Promise<
    WithLanguage<{ id: number }>
  >;

export const putStaff = async (ids: WithLanguage<number>, formData: FormData) =>
  await putRequest2(`${staffPath}/${ids.ko}/${ids.en}`, { body: formData, jsessionID: true });

export const deleteStaff = async (ids: WithLanguage<number>) =>
  deleteRequest2(`${staffPath}/${ids.ko}/${ids.en}`, { jsessionID: true });
