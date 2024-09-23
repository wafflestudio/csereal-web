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

import { deleteRequestV2, getRequestV2, postRequestV2, putRequestV2 } from '.';

const facultyPath = '/professor';
const staffPath = '/staff';

// TODO: /api/v1 v2 통합되면 request 메소드 원래대로 교체

/* 교수진 */

export const getActiveFacultyList = (language: Language) =>
  getRequestV2<FacultyList>(
    '/professor/active',
    { language },
    { next: { tags: [FETCH_TAG_FACULTY] } },
  );

export const getFaculty = (id: number) =>
  getRequestV2<WithLanguage<Faculty>>(`/professor/${id}`, undefined, {
    next: { tags: [FETCH_TAG_FACULTY] },
  });

export const getEmeritusFacultyList = (language: Language) =>
  getRequestV2<SimpleEmeritusFaculty[]>(
    '/professor/inactive',
    { language },
    { next: { tags: [FETCH_TAG_FACULTY] } },
  );

export const getEmeritusFaculty = (id: number) =>
  getRequestV2<WithLanguage<EmeritusFaculty>>(`/professor/${id}`, undefined, {
    next: { tags: [FETCH_TAG_FACULTY] },
  });

export const postFaculty = (formData: FormData) =>
  postRequestV2(facultyPath, { body: formData, jsessionID: true }) as Promise<
    WithLanguage<{ id: number; status: FacultyStatus }>
  >;

export const putFaculty = (ids: WithLanguage<number>, formData: FormData) =>
  putRequestV2(`${facultyPath}/${ids.ko}/${ids.en}`, { body: formData, jsessionID: true });

export const deleteFaculty = (ids: WithLanguage<number>) =>
  deleteRequestV2(`${facultyPath}/${ids.ko}/${ids.en}`, { jsessionID: true });

/* 행정직원 */

export const getStaffList = (language: Language) =>
  getRequestV2<SimpleStaff[]>('/staff', { language }, { next: { tags: [FETCH_TAG_STAFF] } });

export const getStaff = (id: number) =>
  getRequestV2<WithLanguage<Staff>>(`/staff/${id}`, undefined, {
    next: { tags: [FETCH_TAG_STAFF] },
  });

export const postStaff = (formData: FormData) =>
  postRequestV2(staffPath, { body: formData, jsessionID: true }) as Promise<
    WithLanguage<{ id: number }>
  >;

export const putStaff = (ids: WithLanguage<number>, formData: FormData) =>
  putRequestV2(`${staffPath}/${ids.ko}/${ids.en}`, { body: formData, jsessionID: true });

export const deleteStaff = (ids: WithLanguage<number>) =>
  deleteRequestV2(`${staffPath}/${ids.ko}/${ids.en}`, { jsessionID: true });
