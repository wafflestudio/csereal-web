export interface NavTreeNode {
  name: string;
  segment: string;
  isPage: boolean;
  children: NavTreeNode[];
  parent: NavTreeNode | null;
}

export const main: NavTreeNode = {
  name: '홈',
  segment: '',
  isPage: true,
  parent: null,
  children: [],
};

export const about: NavTreeNode = {
  name: '소개',
  segment: 'about',
  isPage: true,
  parent: main,
  children: [],
};

export const overview: NavTreeNode = {
  name: '학부 소개',
  segment: 'overview',
  isPage: true,
  parent: about,
  children: [],
};

export const greetings: NavTreeNode = {
  name: '학부장 인사말',
  segment: 'greetings',
  isPage: true,
  parent: about,
  children: [],
};

export const history: NavTreeNode = {
  name: '연혁',
  segment: 'history',
  isPage: true,
  parent: about,
  children: [],
};

export const futureCareers: NavTreeNode = {
  name: '졸업생 진로',
  segment: 'future-careers',
  isPage: true,
  parent: about,
  children: [],
};

export const studentClubs: NavTreeNode = {
  name: '동아리 소개',
  segment: 'student-clubs',
  isPage: true,
  parent: about,
  children: [],
};

export const facilities: NavTreeNode = {
  name: '시설 안내',
  segment: 'facilities',
  isPage: true,
  parent: about,
  children: [],
};

export const contact: NavTreeNode = {
  name: '연락처',
  segment: 'contact',
  isPage: true,
  parent: about,
  children: [],
};

export const directions: NavTreeNode = {
  name: '찾아오는 길',
  segment: 'directions',
  isPage: true,
  parent: about,
  children: [],
};

export const community: NavTreeNode = {
  name: '소식',
  segment: 'community',
  isPage: true,
  parent: main,
  children: [],
};

export const notice: NavTreeNode = {
  name: '공지사항',
  segment: 'notice',
  isPage: true,
  parent: community,
  children: [],
};

export const news: NavTreeNode = {
  name: '새 소식',
  segment: 'news',
  isPage: true,
  parent: community,
  children: [],
};

export const seminar: NavTreeNode = {
  name: '세미나',
  segment: 'seminar',
  isPage: true,
  parent: community,
  children: [],
};

export const facultyRecruitment: NavTreeNode = {
  name: '신임교수초빙',
  segment: 'faculty-recruitment',
  isPage: true,
  parent: community,
  children: [],
};

export const people: NavTreeNode = {
  name: '구성원',
  segment: 'people',
  isPage: true,
  parent: main,
  children: [],
};

export const faculty: NavTreeNode = {
  name: '교수진',
  segment: 'faculty',
  isPage: true,
  parent: people,
  children: [],
};

export const emeritusFaculty: NavTreeNode = {
  name: '역대 교수진',
  segment: 'emeritus-faculty',
  isPage: true,
  parent: people,
  children: [],
};

export const staff: NavTreeNode = {
  name: '행정직원',
  segment: 'staff',
  isPage: true,
  parent: people,
  children: [],
};

export const research: NavTreeNode = {
  name: '연구·교육',
  segment: 'research',
  isPage: true,
  parent: main,
  children: [],
};

export const researchGroups: NavTreeNode = {
  name: '연구·교육 스트림',
  segment: 'groups',
  isPage: true,
  parent: research,
  children: [],
};

export const researchCenters: NavTreeNode = {
  name: '연구 센터',
  segment: 'centers',
  isPage: true,
  parent: research,
  children: [],
};

export const researchLabs: NavTreeNode = {
  name: '연구실 목록',
  segment: 'labs',
  isPage: true,
  parent: research,
  children: [],
};

export const topConferenceList: NavTreeNode = {
  name: 'Top Conference List',
  segment: 'top-conference-list',
  isPage: true,
  parent: research,
  children: [],
};

export const admissions: NavTreeNode = {
  name: '입학',
  segment: 'admissions',
  isPage: true,
  parent: main,
  children: [],
};

export const undergraduateAdmission: NavTreeNode = {
  name: '학부',
  segment: 'undergraduate',
  isPage: false,
  parent: admissions,
  children: [],
};

export const undergraduateEarlyAdmission: NavTreeNode = {
  name: '수시 모집',
  segment: 'early-admission',
  isPage: true,
  parent: undergraduateAdmission,
  children: [],
};

export const undergraduateRegularAdmission: NavTreeNode = {
  name: '정시 모집',
  segment: 'regular-admission',
  isPage: true,
  parent: undergraduateAdmission,
  children: [],
};

export const graduateAdmission: NavTreeNode = {
  name: '대학원',
  segment: 'graduate',
  isPage: false,
  parent: admissions,
  children: [],
};

export const graduateRegularAdmission: NavTreeNode = {
  name: '전기/후기 모집',
  segment: 'regular-admission',
  isPage: true,
  parent: graduateAdmission,
  children: [],
};

export const internationalAdmission: NavTreeNode = {
  name: 'International',
  segment: 'international',
  isPage: false,
  parent: admissions,
  children: [],
};

export const internationalUndergraduateAdmission: NavTreeNode = {
  name: 'Undergraduate',
  segment: 'undergraduate',
  isPage: true,
  parent: internationalAdmission,
  children: [],
};

export const internationalGraduateAdmission: NavTreeNode = {
  name: 'Graduate',
  segment: 'graduate',
  isPage: true,
  parent: internationalAdmission,
  children: [],
};

export const exchangeVisitingProgram: NavTreeNode = {
  name: 'Exchange/Visiting Program',
  segment: 'exchange',
  isPage: true,
  parent: internationalAdmission,
  children: [],
};

export const internationalScholarships: NavTreeNode = {
  name: 'Scholarships',
  segment: 'scholarships',
  isPage: true,
  parent: internationalAdmission,
  children: [],
};

export const academics: NavTreeNode = {
  name: '학사 및 교과',
  segment: 'academics',
  isPage: true,
  parent: main,
  children: [],
};

export const undergraduateAcademics: NavTreeNode = {
  name: '학부',
  segment: 'undergraduate',
  isPage: false,
  parent: academics,
  children: [],
};

export const undergraduateGuide: NavTreeNode = {
  name: '학부 안내',
  segment: 'guide',
  isPage: true,
  parent: undergraduateAcademics,
  children: [],
};

export const undergraduateCourses: NavTreeNode = {
  name: '교과과정',
  segment: 'courses',
  isPage: true,
  parent: undergraduateAcademics,
  children: [],
};

export const curriculum: NavTreeNode = {
  name: '전공 이수 표준 형태',
  segment: 'curriculum',
  isPage: true,
  parent: undergraduateAcademics,
  children: [],
};

export const generalStudies: NavTreeNode = {
  name: '필수 교양 과목',
  segment: 'general-studies-requirements',
  isPage: true,
  parent: undergraduateAcademics,
  children: [],
};

export const degree: NavTreeNode = {
  name: '졸업 규정',
  segment: 'degree-requirements',
  isPage: true,
  parent: undergraduateAcademics,
  children: [],
};

export const undergraduateCourseChanges: NavTreeNode = {
  name: '교과목 변경 내역',
  segment: 'course-changes',
  isPage: true,
  parent: undergraduateAcademics,
  children: [],
};

export const undergraduateScholarship: NavTreeNode = {
  name: '장학 제도',
  segment: 'scholarship',
  isPage: true,
  parent: undergraduateAcademics,
  children: [],
};

export const graduateAcademics: NavTreeNode = {
  name: '대학원',
  segment: 'graduate',
  isPage: false,
  parent: academics,
  children: [],
};

export const graduateGuide: NavTreeNode = {
  name: '대학원 안내',
  segment: 'guide',
  isPage: true,
  parent: graduateAcademics,
  children: [],
};

export const graduateCourses: NavTreeNode = {
  name: '교과과정',
  segment: 'courses',
  isPage: true,
  parent: graduateAcademics,
  children: [],
};

export const graduateCourseChanges: NavTreeNode = {
  name: '교과목 변경 내역',
  segment: 'course-changes',
  isPage: true,
  parent: graduateAcademics,
  children: [],
};

export const graduateScholarship: NavTreeNode = {
  name: '장학 제도',
  segment: 'scholarship',
  isPage: true,
  parent: graduateAcademics,
  children: [],
};

export const reservations: NavTreeNode = {
  name: '시설 예약',
  segment: 'reservations',
  isPage: true,
  parent: main,
  children: [],
};

export const reservationIntroduction: NavTreeNode = {
  name: '시설 예약 안내',
  segment: 'introduction',
  isPage: true,
  parent: reservations,
  children: [],
};

export const seminarRoom: NavTreeNode = {
  name: '세미나실 예약',
  segment: 'seminar-room',
  isPage: false,
  parent: reservations,
  children: [],
};

export const bldg301room417: NavTreeNode = {
  name: '301-417 (20석)',
  segment: '301-417',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg301Maldives: NavTreeNode = {
  name: '301-MALDIVES (301-521, 11석)',
  segment: '301-521',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg301Hawaii: NavTreeNode = {
  name: '301-HAWAII (301-551-4, 20석)',
  segment: '301-551-4',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg301Baekdu: NavTreeNode = {
  name: '301-BAEKDU (301-552-1, 4석)',
  segment: '301-552-1',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg301Alps: NavTreeNode = {
  name: '301-ALPS (301-552-2, 5석)',
  segment: '301-552-2',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg301Santorini: NavTreeNode = {
  name: '301-SANTORINI (301-552-3, 4석)',
  segment: '301-552-3',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg301Jeju: NavTreeNode = {
  name: '301-JEJU (301-553-6, 6석)',
  segment: '301-553-6',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg301ProfMeeting: NavTreeNode = {
  name: '301-교수회의실 (301-317, 20석)',
  segment: '301-317',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg302room308: NavTreeNode = {
  name: '302-308 (46석)',
  segment: '302-308',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg302room309first: NavTreeNode = {
  name: '302-309-1 (48석)',
  segment: '302-309-1',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg302room309second: NavTreeNode = {
  name: '302-309-2 (8석)',
  segment: '302-309-2',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg302room309third: NavTreeNode = {
  name: '302-309-3 (8석)',
  segment: '302-309-3',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const labRoom: NavTreeNode = {
  name: '실습실 예약',
  segment: 'lab',
  isPage: false,
  parent: reservations,
  children: [],
};

export const softwareLab: NavTreeNode = {
  name: '소프트웨어 실습실 (302-311-1, 102석)',
  segment: '302-311-1',
  isPage: true,
  parent: labRoom,
  children: [],
};

export const hardwareLab: NavTreeNode = {
  name: '하드웨어 실습실 (302-310-2, 30석)',
  segment: '302-310-2',
  isPage: true,
  parent: labRoom,
  children: [],
};

export const lectureRoom: NavTreeNode = {
  name: '공과대학 강의실 예약',
  segment: 'lecture-room',
  isPage: false,
  parent: reservations,
  children: [],
};

export const bldg302room208: NavTreeNode = {
  name: '302-208 (116석)',
  segment: '302-208',
  isPage: true,
  parent: lectureRoom,
  children: [],
};

export const bldg302room209: NavTreeNode = {
  name: '302-209 (90석)',
  segment: '302-209',
  isPage: true,
  parent: lectureRoom,
  children: [],
};

main.children = [about, community, people, research, admissions, academics, reservations];
about.children = [
  overview,
  greetings,
  history,
  futureCareers,
  studentClubs,
  facilities,
  contact,
  directions,
];
community.children = [notice, news, seminar, facultyRecruitment];
people.children = [faculty, emeritusFaculty, staff];
research.children = [researchGroups, researchCenters, researchLabs, topConferenceList];
admissions.children = [undergraduateAdmission, graduateAdmission, internationalAdmission];
undergraduateAdmission.children = [undergraduateEarlyAdmission, undergraduateRegularAdmission];
graduateAdmission.children = [graduateRegularAdmission];
internationalAdmission.children = [
  internationalUndergraduateAdmission,
  internationalGraduateAdmission,
  exchangeVisitingProgram,
  internationalScholarships,
];
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
reservations.children = [reservationIntroduction, seminarRoom, labRoom, lectureRoom];
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
  bldg302room309first,
  bldg302room309second,
  bldg302room309third,
];
labRoom.children = [softwareLab, hardwareLab];
lectureRoom.children = [bldg302room208, bldg302room209];

// 여기 아래로는 네비바 트리에 속하지 않는 페이지들

// 관리자

export const admin: NavTreeNode = {
  name: '관련 페이지', // 관리자 페이지 사이드바는 상위 항목 이름이 '관련 페이지'
  segment: 'admin',
  isPage: true,
  parent: null,
  children: [notice, news, seminar],
};

// 10-10

export const tentenProject: NavTreeNode = {
  name: '10-10 Project',
  segment: '10-10-project',
  isPage: true,
  parent: null,
  children: [],
};

export const tentenManager: NavTreeNode = {
  name: 'Manager',
  segment: 'manager',
  isPage: true,
  parent: tentenProject,
  children: [],
};

export const tentenParticipants: NavTreeNode = {
  name: 'Participants(Professors)',
  segment: 'participants',
  isPage: true,
  parent: tentenProject,
  children: [],
};

export const tentenProposal: NavTreeNode = {
  name: 'Proposal',
  segment: 'proposal',
  isPage: true,
  parent: tentenProject,
  children: [],
};

// 기존 홈페이지 푸터 링크가 propsal로 이동시는 등 proposal 내용이 우선순위라 판단되어 기존과 다르게 0번째로 배치
tentenProject.children = [tentenProposal, tentenManager, tentenParticipants];
