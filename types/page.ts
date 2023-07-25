export interface Location {
  name: string;
  path: string;
  isPage: boolean;
  children: Location[] | null;
  parent: Location | null;
}

export const main: Location = {
  name: '홈',
  path: '',
  isPage: true,
  parent: null,
  children: [],
};

export const about: Location = {
  name: '소개',
  path: 'overview',
  isPage: false,
  parent: main,
  children: [],
};

export const overview: Location = {
  name: '학부 소개',
  path: 'overview',
  isPage: true,
  parent: about,
  children: null,
};

export const greetings: Location = {
  name: '학부장 인사말',
  path: 'greetings',
  isPage: true,
  parent: about,
  children: null,
};

export const futureCareers: Location = {
  name: '졸업생 진로',
  path: 'future-careers',
  isPage: true,
  parent: about,
  children: null,
};

export const studentClubs: Location = {
  name: '동아리 소개',
  path: 'student-clubs',
  isPage: true,
  parent: about,
  children: null,
};

export const facilities: Location = {
  name: '시설 안내',
  path: 'facilities',
  isPage: true,
  parent: about,
  children: null,
};

export const contact: Location = {
  name: '연락처',
  path: 'contact',
  isPage: true,
  parent: about,
  children: null,
};

export const directions: Location = {
  name: '찾아오는 길',
  path: 'directions',
  isPage: true,
  parent: about,
  children: null,
};

export const community: Location = {
  name: '소식',
  path: 'community',
  isPage: false,
  parent: main,
  children: [],
};

export const news: Location = {
  name: '새소식',
  path: 'news',
  isPage: true,
  parent: community,
  children: null,
};

export const notice: Location = {
  name: '공지사항',
  path: 'notice',
  isPage: true,
  parent: community,
  children: null,
};

export const seminar: Location = {
  name: '세미나',
  path: 'seminar',
  isPage: true,
  parent: community,
  children: null,
};

export const facultyRecruitment: Location = {
  name: '신임교수초빙',
  path: 'faculty-recruitment',
  isPage: true,
  parent: community,
  children: null,
};

export const international: Location = {
  name: '국제',
  path: 'international',
  isPage: true,
  parent: community,
  children: null,
};

export const people: Location = {
  name: '구성원',
  path: 'people',
  isPage: false,
  parent: main,
  children: [],
};

export const faculty: Location = {
  name: '교수진',
  path: 'faculty',
  isPage: true,
  parent: people,
  children: null,
};

export const emeritusFaculty: Location = {
  name: '역대 교수진',
  path: 'emeritus-faculty',
  isPage: true,
  parent: people,
  children: null,
};

export const staff: Location = {
  name: '행정직원',
  path: 'staff',
  isPage: true,
  parent: people,
  children: null,
};

export const research: Location = {
  name: '연구',
  path: 'research',
  isPage: false,
  parent: main,
  children: [],
};

export const researchGroups: Location = {
  name: '연구 그룹',
  path: 'research-groups',
  isPage: true,
  parent: research,
  children: null,
};

export const researchCenters: Location = {
  name: '연구 센터',
  path: 'research-centers',
  isPage: true,
  parent: research,
  children: null,
};

export const laboratories: Location = {
  name: '연구실',
  path: 'laboratories',
  isPage: true,
  parent: research,
  children: null,
};

export const topConferenceList: Location = {
  name: 'Top Conference List',
  path: 'top-conference-list',
  isPage: true,
  parent: research,
  children: null,
};

export const admissions: Location = {
  name: '입학',
  path: 'admissions',
  isPage: false,
  parent: main,
  children: [],
};

export const undergraduateAdmission: Location = {
  name: '학부',
  path: 'undergraduate',
  isPage: true,
  parent: admissions,
  children: [],
};

export const earlyAmission: Location = {
  name: '수시',
  path: 'early-amission',
  isPage: true,
  parent: undergraduateAdmission,
  children: null,
};

export const regularAmission: Location = {
  name: '정시',
  path: 'regular-amission',
  isPage: true,
  parent: undergraduateAdmission,
  children: null,
};

export const graduateAdmission: Location = {
  name: '대학원',
  path: 'graduate',
  isPage: true,
  parent: admissions,
  children: null,
};

export const academics: Location = {
  name: '학사 및 교과',
  path: 'academics',
  isPage: false,
  parent: main,
  children: [],
};

export const undergraduate: Location = {
  name: '학부',
  path: 'undergraduate',
  isPage: false,
  parent: academics,
  children: [],
};

export const undergraduateGuide: Location = {
  name: '학부 안내',
  path: 'guide',
  isPage: true,
  parent: undergraduate,
  children: null,
};

export const undergraduateCourses: Location = {
  name: '교과목 정보',
  path: 'courses',
  isPage: true,
  parent: undergraduate,
  children: null,
};

export const curriculum: Location = {
  name: '전공 이수 표준 형태',
  path: 'curriculum',
  isPage: true,
  parent: undergraduate,
  children: null,
};

export const generalStudies: Location = {
  name: '필수 교양 과목',
  path: 'general-studies-requirements',
  isPage: true,
  parent: undergraduate,
  children: null,
};

export const degree: Location = {
  name: '졸업 규정',
  path: 'degree-requirements',
  isPage: true,
  parent: undergraduate,
  children: null,
};

export const undergraduateCourseChanges: Location = {
  name: '교과목 변경 내역',
  path: 'course-changes',
  isPage: true,
  parent: undergraduate,
  children: null,
};

export const undergraduateScholarship: Location = {
  name: '장학 제도',
  path: 'scholarship',
  isPage: true,
  parent: undergraduate,
  children: null,
};

export const graduate: Location = {
  name: '학부',
  path: 'graduate',
  isPage: false,
  parent: academics,
  children: [],
};

export const graduateGuide: Location = {
  name: '대학원 안내',
  path: 'courses',
  isPage: true,
  parent: graduate,
  children: null,
};

export const graduateCourses: Location = {
  name: '교과목 정보',
  path: 'courses',
  isPage: true,
  parent: graduate,
  children: null,
};

export const graduateCourseChanges: Location = {
  name: '교과목 변경 내역',
  path: 'course-changes',
  isPage: true,
  parent: graduate,
  children: null,
};

export const graduateScholarship: Location = {
  name: '장학 제도',
  path: 'scholarship',
  isPage: true,
  parent: graduate,
  children: null,
};

export const reservations: Location = {
  name: '시설 예약',
  path: 'reservations',
  isPage: false,
  parent: main,
  children: [],
};

export const seminarRoom: Location = {
  name: '세미나실',
  path: 'seminar-room',
  isPage: true,
  parent: reservations,
  children: [],
};

export const bldg301room417: Location = {
  name: '301-417 (20석)',
  path: '301-417',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const bldg301Maldives: Location = {
  name: '301-MALDIVES (11석)',
  path: '301-521',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const bldg301Hawaii: Location = {
  name: '301-HAWAII (20석)',
  path: '301-551-4',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const bldg301Baekdu: Location = {
  name: '301-BAEKDU (4석)',
  path: '301-552-1',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const bldg301Alps: Location = {
  name: '301-ALPS (5석)',
  path: '301-552-2',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const bldg301Santorini: Location = {
  name: '301-SANTORINI (4석)',
  path: '301-552-3',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const bldg301Jeju: Location = {
  name: '301-JEJU (6석)',
  path: '301-553-6',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const bldg301ProfMeeting: Location = {
  name: '301-교수회의실 (20석)',
  path: '301-317',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const bldg302room308: Location = {
  name: '302-308 (46석)',
  path: '302-308',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const buld302room309first: Location = {
  name: '302-309-1 (48석)',
  path: '302-309-1',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const buld302room309second: Location = {
  name: '302-309-2 (8석)',
  path: '302-309-2',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const buld302room309third: Location = {
  name: '302-309-3 (8석)',
  path: '302-309-3',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const lab: Location = {
  name: '실습실 예약',
  path: 'lab',
  isPage: true,
  parent: reservations,
  children: [],
};

export const softwareLab: Location = {
  name: '소프트웨어 실습실 (102석)',
  path: '302-311-1',
  isPage: true,
  parent: lab,
  children: null,
};

export const hardwareLab: Location = {
  name: '하드웨어 실습실 (30석)',
  path: '302-310-2',
  isPage: true,
  parent: lab,
  children: null,
};

export const classroom: Location = {
  name: '공과대학 강의실 예약',
  path: 'classroom',
  isPage: true,
  parent: reservations,
  children: [],
};

export const bldg302room208: Location = {
  name: '302-208 (116석)',
  path: '302-208',
  isPage: true,
  parent: classroom,
  children: null,
};

export const bldg302room209: Location = {
  name: '302-209 (90석)',
  path: '302-209',
  isPage: true,
  parent: classroom,
  children: null,
};

main.children = [about, community, people, research, admissions, academics, reservations];
about.children = [
  overview,
  greetings,
  futureCareers,
  studentClubs,
  facilities,
  contact,
  directions,
];
community.children = [news, notice, seminar, facultyRecruitment, international];
people.children = [faculty, emeritusFaculty, staff];
research.children = [researchGroups, researchCenters, laboratories, topConferenceList];
admissions.children = [undergraduateAdmission, graduateAdmission];
undergraduateAdmission.children = [earlyAmission, regularAmission];
academics.children = [undergraduate, graduate];
undergraduate.children = [
  undergraduateGuide,
  undergraduateCourses,
  curriculum,
  generalStudies,
  degree,
  undergraduateCourseChanges,
  undergraduateScholarship,
];
graduate.children = [graduateGuide, graduateCourses, graduateCourseChanges, graduateScholarship];
reservations.children = [seminarRoom, lab, classroom];
seminarRoom.children = [
  bldg301room417,
  bldg301Maldives,
  bldg301Hawaii,
  bldg301Baekdu,
  bldg301Alps,
  bldg301Santorini,
  bldg301Jeju,
  bldg301ProfMeeting,
  bldg302room308,
  buld302room309first,
  buld302room309second,
  buld302room309third,
];
lab.children = [softwareLab, hardwareLab];
classroom.children = [bldg302room208, bldg302room209];
