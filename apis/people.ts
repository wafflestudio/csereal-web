import { Language, WithLanguage } from '@/types/language';
import {
  EmiritusFaculty,
  Faculty,
  FacultyList,
  FacultyStatus,
  SimpleEmiritusFaculty,
  SimpleStaff,
  Staff,
} from '@/types/people';

import {
  deleteRequest,
  deleteRequest2,
  getRequest,
  getRequest2,
  postRequest,
  postRequest2,
  putRequest,
  putRequest2,
} from '.';

const facultyPath = '/professor';
const staffPath = '/staff';

export const getActiveFacultyList = (language: Language) =>
  getRequest<FacultyList>('/professor/active', { language });

export const getFaculty = (id: number) => getRequest<Faculty>(`/professor/${id}`);

export const getEmeritusFacultyList = (language: Language) =>
  getRequest<SimpleEmiritusFaculty[]>('/professor/inactive', { language });

export const getEmeritusFaculty = (id: number) => getRequest<EmiritusFaculty>(`/professor/${id}`);

export const getStaffList = (language: Language) =>
  getRequest<SimpleStaff[]>('/staff', { language });

export const getStaff = (id: number) => getRequest2<WithLanguage<Staff>>(`/staff/${id}`);

export const postFaculty = async (formData: FormData) => {
  return postRequest(facultyPath, { body: formData, jsessionID: true }) as Promise<{
    id: number;
    status: FacultyStatus;
  }>;
};

export const putFaculty = async (id: number, formData: FormData) => {
  await putRequest(`${facultyPath}/${id}`, { body: formData, jsessionID: true });
};

export const deleteFaculty = async (id: number) =>
  deleteRequest(`${facultyPath}/${id}`, { jsessionID: true });

export const postStaff = async (formData: FormData) => {
  return postRequest2(staffPath, { body: formData, jsessionID: true }) as Promise<{
    ko: { id: number };
  }>;
};

export const putStaff = async (ids: WithLanguage<number>, formData: FormData) => {
  await putRequest2(`${staffPath}/${ids.ko}/${ids.en}`, { body: formData, jsessionID: true });
};

export const deleteStaff = async (ids: WithLanguage<number>) =>
  deleteRequest2(`${staffPath}/${ids.ko}/${ids.en}`, { jsessionID: true });
