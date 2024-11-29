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

import { deleteRequest, getRequest, postRequest, putRequest } from '.';

/* 교수진 */

export const getActiveFacultyList = (language: Language) =>
  getRequest<FacultyList>(
    '/v2/professor/active',
    { language },
    { next: { tags: [FETCH_TAG_FACULTY] } },
  );

export const getFaculty = (id: number) =>
  getRequest<WithLanguage<Faculty>>(`/v2/professor/${id}`, undefined, {
    next: { tags: [FETCH_TAG_FACULTY] },
  });

export const getEmeritusFacultyList = (language: Language) =>
  getRequest<SimpleEmeritusFaculty[]>(
    '/v2/professor/inactive',
    { language },
    { next: { tags: [FETCH_TAG_FACULTY] } },
  );

export const getEmeritusFaculty = (id: number) =>
  getRequest<WithLanguage<EmeritusFaculty>>(`/v2/professor/${id}`, undefined, {
    next: { tags: [FETCH_TAG_FACULTY] },
  });

export const postFaculty = (formData: FormData) =>
  postRequest('/v2/professor', { body: formData, jsessionID: true }) as Promise<
    WithLanguage<{ id: number; status: FacultyStatus }>
  >;

export const putFaculty = (ids: WithLanguage<number>, formData: FormData) =>
  putRequest(`/v2/professor/${ids.ko}/${ids.en}`, { body: formData, jsessionID: true });

export const deleteFaculty = (ids: WithLanguage<number>) =>
  deleteRequest(`/v2/professor/${ids.ko}/${ids.en}`, { jsessionID: true });

/* 행정직원 */

export const getStaffList = (language: Language) =>
  getRequest<SimpleStaff[]>('v2/staff', { language }, { next: { tags: [FETCH_TAG_STAFF] } });

export const getStaff = (id: number) =>
  getRequest<WithLanguage<Staff>>(`v2/staff/${id}`, undefined, {
    next: { tags: [FETCH_TAG_STAFF] },
  });

export const postStaff = (formData: FormData) =>
  postRequest('/v2/staff', { body: formData, jsessionID: true }) as Promise<
    WithLanguage<{ id: number }>
  >;

export const putStaff = (ids: WithLanguage<number>, formData: FormData) =>
  putRequest(`'/v2/staff/${ids.ko}/${ids.en}`, { body: formData, jsessionID: true });

export const deleteStaff = (ids: WithLanguage<number>) =>
  deleteRequest(`/v2/staff/${ids.ko}/${ids.en}`, { jsessionID: true });
