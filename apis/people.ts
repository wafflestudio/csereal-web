import { getMockFaculty, getMockFacultyList } from '@/data/faculty';

import { FacultyList, Faculty, StaffListResponse, StaffReponse } from '@/types/people';

import { getRequest } from '.';

export const getFacultyList = getMockFacultyList;

export const getFaculty = getMockFaculty;

export const getEmeritusFacultyList = () =>
  getRequest('/professor/inactive') as Promise<FacultyList>;

const FacultyDescription = `<p>컴퓨터공학부는 35명의 훌륭한 교수진과 최신 시설을 갖추고 400여 명의 학부생과 350여 명의 대학원생에게 세계 최고 수준의 교육 연구 환경을 제공하고 있다. 2005년에는 서울대학교 최초로 외국인 정교수인 Robert Ian McKay 교수를 임용한 것을 시작으로 교내에서 가장 국제화가 활발하게 이루어지고 있는 학부로 평가받고 있다. 현재 훌륭한 외국인 교수님 두 분이 학부 학생들의 교육 및 연구 지도에 총력을 기울이고 있다.
</p><p>다수의 외국인 학부생, 대학원생이 재학 중에 있으며 매 학기 전공 필수 과목을 비롯한 30% 이상의 과목이 영어로 개설되고 있어 외국인 학생의 학업을 돕는 동시에 한국인 학생이 세계로 진출하는 초석이 되고 있다. 또한 CSE int’l Luncheon을 개최하여 학부 내 외국인 구성원의 화합과 생활의 불편함을 최소화하는 등 학부 차원에서 최선을 다하고 있다.
</p>`;

// mockdata 용
const generateRandomBooleans = (count: number) => {
  const randomBooleans = [];
  for (let i = 0; i < count; i++) {
    const randomBoolean = Math.random() < 0.5;
    randomBooleans.push(randomBoolean);
  }
  return randomBooleans;
};

export const getMockEmeritusFacultyList: typeof getEmeritusFacultyList = async () => {
  const randomBooleans = generateRandomBooleans(13);
  const facultyList = Array.from({ length: 13 }, (_, index) => {
    return {
      id: index + 1,
      name: `명예교수 ${index + 1}`,
      academicRank: '명예교수',
      email: randomBooleans[index] ? `ukang@snu.ac.kr` : undefined,
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EA%B3%A0%EA%B1%B4%EA%B5%90%EC%88%98%EB%8B%98_0.JPG?itok=ViFOQxpn',
    };
  });

  return {
    facultyList,
  };
};

export const getMockEmeritusFaculty: typeof getFaculty = async () => {
  return {
    id: 1,
    name: `명예교수 1`,
    academicRank: '명예교수',
    office: '301동 502호',
    phone: '(02) 880-7254',
    email: `ukang@snu.ac.kr`,
    website: 'http://mmlab.snu.ac.kr/~tksdcasdcacsdcadscasdcdscaasdc/',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EA%B0%95%EC%9C%A0.png?itok=MB8iS-5w',
    isActive: false,
    startDate: new Date(),
    endDate: new Date(),

    educations: [
      '서울대학교 컴퓨터공학 박사 (2000)',
      '서울대학교 컴퓨터공학 석사 (1995)',
      '서울대학교 컴퓨터공학 학사 (1993)',
    ],
    researchAreas: [
      'Wireless networks: ad-hoc network, sensor network, multimedia streaming',
      'Wireless technologies convergence',
      'Mobile networks: mobility management, peer-to-peer mobility',
    ],
  };
};

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
