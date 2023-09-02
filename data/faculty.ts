import {
  EmiritusFaculty,
  Faculty,
  FacultyList,
  SimpleEmiritusFaculty,
  Staff,
  StaffList,
} from '@/types/people';

import {
  emeritusFaculties,
  emeritusFacultiesEng,
  emeritusFacultyList,
  emeritusFacultyListEng,
  faculties,
  facultiesEng,
  facultyList,
  facultyListEng,
  staff,
  staffEng,
  staffList,
  staffListEng,
} from './objects';

// TODO: labId 연결
export const getMockFacultyList = async (): Promise<FacultyList> => {
  return {
    description:
      '<p>컴퓨터공학부는 35명의 훌륭한 교수진과 최신 시설을 갖추고 400여 명의 학부생과 350여 명의 대학원생에게 세계 최고 수준의 교육 연구 환경을 제공하고 있다. 2005년에는 서울대학교 최초로 외국인 정교수인 Robert Ian McKay 교수를 임용한 것을 시작으로 교내에서 가장 국제화가 활발하게 이루어지고 있는 학부로 평가받고 있다. 현재 훌륭한 외국인 교수님 두 분이 학부 학생들의 교육 및 연구 지도에 총력을 기울이고 있다.</p><br/><p> 다수의 외국인 학부생, 대학원생이 재학 중에 있으며 매 학기 전공 필수 과목을 비롯한 30% 이상의 과목이 영어로 개설되고 있어 외국인 학생의 학업을 돕는 동시에 한국인 학생이 세계로 진출하는 초석이 되고 있다. 또한 CSE int’l Luncheon을 개최하여 학부 내 외국인 구성원의 화합과 생활의 불편함을 최소화하는 등 학부 차원에서 최선을 다하고 있다.</p>',
    facultyList,
  };
};

export const getMockFaculty = async (id: number): Promise<Faculty> => {
  return faculties[id];
};

export const getMockEmeritusFacultyList = async (): Promise<SimpleEmiritusFaculty[]> => {
  return emeritusFacultyList;
};

export const getMockEmeritusFaculty = async (id: number): Promise<EmiritusFaculty> => {
  return emeritusFaculties[id];
};

export const getMockStaffList = async (): Promise<StaffList> => {
  return staffList;
};

export const getMockStaff = async (id: number): Promise<Staff> => {
  return staff[id];
};

// 영어 데이터

export const getMockFacultyListEng = async (): Promise<FacultyList> => {
  return {
    description: `<p><span style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px;">The current enrollment in the department is about 400 undergraduate and over 350 graduate students. Students are studying in state-of-the-art facilities with 35 internationally renowned faculty members.</span><br></p><p style="margin: 1em 0px; color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">CSE has been leading SNU's globalization efforts. CSE recruited the first international professor at Seoul National University, Robert lan McKay, in 2005. As of 2011, six international scholars are actively engaged in CSE education and research programs. Currently over 50 international undergraduate and graduate students are enrolled in CSE degree programs. Over 30% of the courses in CSE (including mandatory courses) are offered in English. CSE is one of the successfully internationalized academic units at SNU.</p><p style="margin: 1em 0px; color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">The department hosts various annual programs to help foreign students adjust quickly to the new environment at SNU. These events, formed by the international study group at SNU, are an opportunity for foreign students and current CSE students to get to know each other. These efforts will help our students succeed in a globalized world.</p>`,
    facultyList: facultyListEng,
  };
};

export const getMockFacultyEng = async (id: number): Promise<Faculty> => {
  return facultiesEng[id];
};

export const getMockEmeritusFacultyListEng = async (): Promise<SimpleEmiritusFaculty[]> => {
  return emeritusFacultyListEng;
};

export const getMockEmeritusFacultyEng = async (id: number): Promise<EmiritusFaculty> => {
  return emeritusFacultiesEng[id];
};

export const getMockStaffListEng = async (): Promise<StaffList> => {
  return staffListEng;
};

export const getMockStaffEng = async (id: number): Promise<Staff> => {
  return staffEng[id];
};
