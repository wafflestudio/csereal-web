import {
  EmiritusFaculty,
  Faculty,
  FacultyList,
  SimpleEmiritusFaculty,
  SimpleStaff,
  Staff,
} from '@/types/people';

import { getRequest } from './network/server';

export const getActiveFacultyList = () => getRequest<FacultyList>('/professor/active');

export const getFaculty = (id: number) => getRequest<Faculty>(`/professor/${id}`);

export const getEmeritusFacultyList = () =>
  getRequest<SimpleEmiritusFaculty[]>('/professor/inactive');

export const getEmeritusFaculty = (id: number) => getRequest<EmiritusFaculty>(`/professor/${id}`);

export const getStaffList = () => getRequest<SimpleStaff[]>('/staff');

export const getStaff = (id: number) => getRequest<Staff>(`/staff/${id}`);
