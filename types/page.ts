export interface SegmentNode {
  name: string;
  segment: string;
  isPage: boolean;
  children: SegmentNode[] | null;
  parent: SegmentNode | null;
}

export const main: SegmentNode = {
  name: '홈',
  segment: '',
  isPage: true,
  parent: null,
  children: [],
};

export const about: SegmentNode = {
  name: '소개',
  segment: 'overview',
  isPage: false,
  parent: main,
  children: [],
};

export const overview: SegmentNode = {
  name: '학부 소개',
  segment: 'overview',
  isPage: true,
  parent: about,
  children: null,
};

export const greetings: SegmentNode = {
  name: '학부장 인사말',
  segment: 'greetings',
  isPage: true,
  parent: about,
  children: null,
};

export const futureCareers: SegmentNode = {
  name: '졸업생 진로',
  segment: 'future-careers',
  isPage: true,
  parent: about,
  children: null,
};

export const studentClubs: SegmentNode = {
  name: '동아리 소개',
  segment: 'student-clubs',
  isPage: true,
  parent: about,
  children: null,
};

export const facilities: SegmentNode = {
  name: '시설 안내',
  segment: 'facilities',
  isPage: true,
  parent: about,
  children: null,
};

export const contact: SegmentNode = {
  name: '연락처',
  segment: 'contact',
  isPage: true,
  parent: about,
  children: null,
};

export const directions: SegmentNode = {
  name: '찾아오는 길',
  segment: 'directions',
  isPage: true,
  parent: about,
  children: null,
};

export const community: SegmentNode = {
  name: '소식',
  segment: 'community',
  isPage: false,
  parent: main,
  children: [],
};

export const news: SegmentNode = {
  name: '새소식',
  segment: 'news',
  isPage: true,
  parent: community,
  children: null,
};

export const notice: SegmentNode = {
  name: '공지사항',
  segment: 'notice',
  isPage: true,
  parent: community,
  children: null,
};

export const seminar: SegmentNode = {
  name: '세미나',
  segment: 'seminar',
  isPage: true,
  parent: community,
  children: null,
};

export const facultyRecruitment: SegmentNode = {
  name: '신임교수초빙',
  segment: 'faculty-recruitment',
  isPage: true,
  parent: community,
  children: null,
};

export const international: SegmentNode = {
  name: '국제(International)',
  segment: 'international',
  isPage: true,
  parent: community,
  children: null,
};

export const people: SegmentNode = {
  name: '구성원',
  segment: 'people',
  isPage: false,
  parent: main,
  children: [],
};

export const faculty: SegmentNode = {
  name: '교수진',
  segment: 'faculty',
  isPage: true,
  parent: people,
  children: null,
};

export const emeritusFaculty: SegmentNode = {
  name: '역대 교수진',
  segment: 'emeritus-faculty',
  isPage: true,
  parent: people,
  children: null,
};

export const staff: SegmentNode = {
  name: '행정직원',
  segment: 'staff',
  isPage: true,
  parent: people,
  children: null,
};

export const research: SegmentNode = {
  name: '연구',
  segment: 'research',
  isPage: false,
  parent: main,
  children: [],
};

export const researchGroups: SegmentNode = {
  name: '연구 그룹',
  segment: 'research-groups',
  isPage: true,
  parent: research,
  children: null,
};

export const researchCenters: SegmentNode = {
  name: '연구 센터',
  segment: 'research-centers',
  isPage: true,
  parent: research,
  children: null,
};

export const laboratories: SegmentNode = {
  name: '연구실',
  segment: 'laboratories',
  isPage: true,
  parent: research,
  children: null,
};

export const topConferenceList: SegmentNode = {
  name: 'Top Conference List',
  segment: 'top-conference-list',
  isPage: true,
  parent: research,
  children: null,
};

export const admissions: SegmentNode = {
  name: '입학',
  segment: 'admissions',
  isPage: false,
  parent: main,
  children: [],
};

export const undergraduateAdmission: SegmentNode = {
  name: '학부',
  segment: 'undergraduate',
  isPage: true,
  parent: admissions,
  children: [],
};

export const earlyAdmission: SegmentNode = {
  name: '수시',
  segment: 'early-admission',
  isPage: true,
  parent: undergraduateAdmission,
  children: null,
};

export const regularAdmission: SegmentNode = {
  name: '정시',
  segment: 'regular-admission',
  isPage: true,
  parent: undergraduateAdmission,
  children: null,
};

export const graduateAdmission: SegmentNode = {
  name: '대학원',
  segment: 'graduate',
  isPage: true,
  parent: admissions,
  children: null,
};

export const academics: SegmentNode = {
  name: '학사 및 교과',
  segment: 'academics',
  isPage: false,
  parent: main,
  children: [],
};

export const undergraduateAcademics: SegmentNode = {
  name: '학부',
  segment: 'undergraduate',
  isPage: false,
  parent: academics,
  children: [],
};

export const undergraduateGuide: SegmentNode = {
  name: '학부 안내',
  segment: 'guide',
  isPage: true,
  parent: undergraduateAcademics,
  children: null,
};

export const undergraduateCourses: SegmentNode = {
  name: '교과목 정보',
  segment: 'courses',
  isPage: true,
  parent: undergraduateAcademics,
  children: null,
};

export const curriculum: SegmentNode = {
  name: '전공 이수 표준 형태',
  segment: 'curriculum',
  isPage: true,
  parent: undergraduateAcademics,
  children: null,
};

export const generalStudies: SegmentNode = {
  name: '필수 교양 과목',
  segment: 'general-studies-requirements',
  isPage: true,
  parent: undergraduateAcademics,
  children: null,
};

export const degree: SegmentNode = {
  name: '졸업 규정',
  segment: 'degree-requirements',
  isPage: true,
  parent: undergraduateAcademics,
  children: null,
};

export const undergraduateCourseChanges: SegmentNode = {
  name: '교과목 변경 내역',
  segment: 'course-changes',
  isPage: true,
  parent: undergraduateAcademics,
  children: null,
};

export const undergraduateScholarship: SegmentNode = {
  name: '장학 제도',
  segment: 'scholarship',
  isPage: true,
  parent: undergraduateAcademics,
  children: null,
};

export const graduateAcademics: SegmentNode = {
  name: '대학원',
  segment: 'graduate',
  isPage: false,
  parent: academics,
  children: [],
};

export const graduateGuide: SegmentNode = {
  name: '대학원 안내',
  segment: 'courses',
  isPage: true,
  parent: graduateAcademics,
  children: null,
};

export const graduateCourses: SegmentNode = {
  name: '교과목 정보',
  segment: 'courses',
  isPage: true,
  parent: graduateAcademics,
  children: null,
};

export const graduateCourseChanges: SegmentNode = {
  name: '교과목 변경 내역',
  segment: 'course-changes',
  isPage: true,
  parent: graduateAcademics,
  children: null,
};

export const graduateScholarship: SegmentNode = {
  name: '장학 제도',
  segment: 'scholarship',
  isPage: true,
  parent: graduateAcademics,
  children: null,
};

export const reservations: SegmentNode = {
  name: '시설 예약',
  segment: 'reservations',
  isPage: false,
  parent: main,
  children: [],
};

export const seminarRoom: SegmentNode = {
  name: '세미나실',
  segment: 'seminar-room',
  isPage: true,
  parent: reservations,
  children: [],
};

export const bldg301room417: SegmentNode = {
  name: '301-417 (20석)',
  segment: '301-417',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const bldg301Maldives: SegmentNode = {
  name: '301-MALDIVES (11석)',
  segment: '301-521',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const bldg301Hawaii: SegmentNode = {
  name: '301-HAWAII (20석)',
  segment: '301-551-4',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const bldg301Baekdu: SegmentNode = {
  name: '301-BAEKDU (4석)',
  segment: '301-552-1',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const bldg301Alps: SegmentNode = {
  name: '301-ALPS (5석)',
  segment: '301-552-2',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const bldg301Santorini: SegmentNode = {
  name: '301-SANTORINI (4석)',
  segment: '301-552-3',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const bldg301Jeju: SegmentNode = {
  name: '301-JEJU (6석)',
  segment: '301-553-6',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const bldg301ProfMeeting: SegmentNode = {
  name: '301-교수회의실 (20석)',
  segment: '301-317',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const bldg302room308: SegmentNode = {
  name: '302-308 (46석)',
  segment: '302-308',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const buld302room309first: SegmentNode = {
  name: '302-309-1 (48석)',
  segment: '302-309-1',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const buld302room309second: SegmentNode = {
  name: '302-309-2 (8석)',
  segment: '302-309-2',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const buld302room309third: SegmentNode = {
  name: '302-309-3 (8석)',
  segment: '302-309-3',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

export const labRoom: SegmentNode = {
  name: '실습실 예약',
  segment: 'lab',
  isPage: true,
  parent: reservations,
  children: [],
};

export const softwareLab: SegmentNode = {
  name: '소프트웨어 실습실 (102석)',
  segment: '302-311-1',
  isPage: true,
  parent: labRoom,
  children: null,
};

export const hardwareLab: SegmentNode = {
  name: '하드웨어 실습실 (30석)',
  segment: '302-310-2',
  isPage: true,
  parent: labRoom,
  children: null,
};

export const lectureRoom: SegmentNode = {
  name: '공과대학 강의실 예약',
  segment: 'lecture-room',
  isPage: true,
  parent: reservations,
  children: [],
};

export const bldg302room208: SegmentNode = {
  name: '302-208 (116석)',
  segment: '302-208',
  isPage: true,
  parent: lectureRoom,
  children: null,
};

export const bldg302room209: SegmentNode = {
  name: '302-209 (90석)',
  segment: '302-209',
  isPage: true,
  parent: lectureRoom,
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
undergraduateAdmission.children = [earlyAdmission, regularAdmission];
academics.children = [undergraduateAcademics, graduateAcademics];
undergraduateAcademics.children = [
  undergraduateGuide,
  undergraduateCourses,
  curriculum,
  generalStudies,
  degree,
  undergraduateCourseChanges,
  undergraduateScholarship,
];
graduateAcademics.children = [
  graduateGuide,
  graduateCourses,
  graduateCourseChanges,
  graduateScholarship,
];
reservations.children = [seminarRoom, labRoom, lectureRoom];
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
labRoom.children = [softwareLab, hardwareLab];
lectureRoom.children = [bldg302room208, bldg302room209];
