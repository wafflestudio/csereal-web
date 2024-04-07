import {
  EmiritusFaculty,
  Faculty,
  FacultyList,
  SimpleEmiritusFaculty,
  SimpleStaff,
  Staff,
} from '@/types/people';

import { getRequest } from '.';

export const getActiveFacultyList = (locale: 'en' | 'ko') =>
  getRequest<FacultyList>('/professor/active', { language: locale });

export const getFaculty = (locale: 'en' | 'ko', id: number) =>
  getRequest<Faculty>(`/professor/${id}`, { language: locale });

export const getEmeritusFacultyList = () =>
  getRequest<SimpleEmiritusFaculty[]>('/professor/inactive');

export const getEmeritusFaculty = (id: number) => getRequest<EmiritusFaculty>(`/professor/${id}`);

export const getStaffList = () => getRequest<SimpleStaff[]>('/staff');

export const getStaff = (id: number) => getRequest<Staff>(`/staff/${id}`);
