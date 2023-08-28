import {
  getMockEmeritusFaculty,
  getMockEmeritusFacultyList,
  getMockFaculty,
  getMockFacultyList,
  getMockStaffList,
  getMockStaff,
} from '@/data/faculty';

import { StaffList, Staff } from '@/types/people';

import { getRequest } from '.';

export const getFacultyList = getMockFacultyList;

export const getFaculty = getMockFaculty;

export const getEmeritusFacultyList = getMockEmeritusFacultyList;

export const getEmeritusFaculty = getMockEmeritusFaculty;

export const getStaffList = getMockStaffList;

export const getStaff = getMockStaff;
