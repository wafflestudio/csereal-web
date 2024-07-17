import {
  EmiritusFaculty,
  Faculty,
  FacultyList,
  FacultyStatus,
  SimpleEmiritusFaculty,
  SimpleStaff,
  Staff,
} from '@/types/people';

import { deleteRequest, getRequest, postRequest, putRequest } from '.';

const facultyPath = '/professor';
const staffPath = '/staff';

export const getActiveFacultyList = (locale: 'en' | 'ko') =>
  getRequest<FacultyList>('/professor/active', { language: locale });

export const getFaculty = (id: number) => getRequest<Faculty>(`/professor/${id}`);

export const getEmeritusFacultyList = () =>
  getRequest<SimpleEmiritusFaculty[]>('/professor/inactive');

export const getEmeritusFaculty = (id: number) => getRequest<EmiritusFaculty>(`/professor/${id}`);

export const getStaffList = () => getRequest<SimpleStaff[]>('/staff');

export const getStaff = (id: number) => getRequest<Staff>(`/staff/${id}`);

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
  return postRequest(staffPath, { body: formData, jsessionID: true }) as Promise<{
    id: number;
  }>;
};

export const putStaff = async (id: number, formData: FormData) => {
  await putRequest(`${staffPath}/${id}`, { body: formData, jsessionID: true });
};

export const deleteStaff = async (id: number) =>
  deleteRequest(`${staffPath}/${id}`, { jsessionID: true });
