import {
  getMockEmeritusFaculty,
  getMockEmeritusFacultyList,
  getMockFaculty,
  getMockFacultyList,
} from '@/data/faculty';

import { StaffListResponse, StaffReponse } from '@/types/people';

import { getRequest } from '.';

export const getFacultyList = getMockFacultyList;

export const getFaculty = getMockFaculty;

export const getEmeritusFacultyList = getMockEmeritusFacultyList;

export const getEmeritusFaculty = getMockEmeritusFaculty;

export const getStaffList = () => getRequest('/staff') as Promise<StaffListResponse>;

export const getStaff = (id: number) => getRequest(`/staff/${id}`) as Promise<StaffReponse>;

export const getMockStaffList: typeof getStaffList = async () => {
  const staffList = Array.from({ length: 7 }, (_, index) => {
    return {
      id: index + 1,
      name: `교수 ${index + 1}`,
      role: '교원인사.일반서무',
      phone: '(02) 880-7254',
      email: `ukang@snu.ac.kr`,
      office: '301동 316호',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--staff_member/KakaoTalk_20230109_143257675.jpg?itok=-qTVUJTk',
    };
  });

  return {
    staffList: staffList,
  };
};

export const getMockStaff: typeof getStaff = async () => {
  return {
    id: 1,
    name: `직원 1`,
    role: '교원인사.일반서무',
    phone: '(02) 880-7254',
    email: `ukang@snu.ac.kr`,
    office: '301동 316호',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--staff_member/KakaoTalk_20230109_143257675.jpg?itok=-qTVUJTk',
    tasks: ['연구처 업무', '세미나실 예약', '동문회'],
  };
};
