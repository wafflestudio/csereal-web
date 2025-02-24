export interface SegmentNode {
  name: string;
  segment: string;
  isPage: boolean;
  children: SegmentNode[];
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
  segment: 'about',
  isPage: true,
  parent: main,
  children: [],
};

export const overview: SegmentNode = {
  name: '학부 소개',
  segment: 'overview',
  isPage: true,
  parent: about,
  children: [],
};

export const greetings: SegmentNode = {
  name: '학부장 인사말',
  segment: 'greetings',
  isPage: true,
  parent: about,
  children: [],
};

export const history: SegmentNode = {
  name: '연혁',
  segment: 'history',
  isPage: true,
  parent: about,
  children: [],
};

export const futureCareers: SegmentNode = {
  name: '졸업생 진로',
  segment: 'future-careers',
  isPage: true,
  parent: about,
  children: [],
};

export const studentClubs: SegmentNode = {
  name: '동아리 소개',
  segment: 'student-clubs',
  isPage: true,
  parent: about,
  children: [],
};

export const facilities: SegmentNode = {
  name: '시설 안내',
  segment: 'facilities',
  isPage: true,
  parent: about,
  children: [],
};

export const contact: SegmentNode = {
  name: '연락처',
  segment: 'contact',
  isPage: true,
  parent: about,
  children: [],
};

export const directions: SegmentNode = {
  name: '찾아오는 길',
  segment: 'directions',
  isPage: true,
  parent: about,
  children: [],
};

export const community: SegmentNode = {
  name: '소식',
  segment: 'community',
  isPage: true,
  parent: main,
  children: [],
};

export const notice: SegmentNode = {
  name: '공지사항',
  segment: 'notice',
  isPage: true,
  parent: community,
  children: [],
};

export const news: SegmentNode = {
  name: '새 소식',
  segment: 'news',
  isPage: true,
  parent: community,
  children: [],
};

export const seminar: SegmentNode = {
  name: '세미나',
  segment: 'seminar',
  isPage: true,
  parent: community,
  children: [],
};

export const facultyRecruitment: SegmentNode = {
  name: '신임교수초빙',
  segment: 'faculty-recruitment',
  isPage: true,
  parent: community,
  children: [],
};

export const council: SegmentNode = {
  name: '학생회',
  segment: 'council',
  isPage: true,
  parent: community,
  children: [],
};

export const councilIntro: SegmentNode = {
  name: '학생회 소개',
  segment: 'intro',
  isPage: true,
  parent: council,
  children: [],
};

export const councilMinute: SegmentNode = {
  name: '학생회 회의록',
  segment: 'minute',
  isPage: true,
  parent: council,
  children: [],
};

export const councilBylaws: SegmentNode = {
  name: '학생회칙 및 세칙',
  segment: 'bylaws',
  isPage: true,
  parent: council,
  children: [],
};

export const councilReportList: SegmentNode = {
  name: '활동 보고',
  segment: 'report',
  isPage: true,
  parent: council,
  children: [],
};

export const people: SegmentNode = {
  name: '구성원',
  segment: 'people',
  isPage: true,
  parent: main,
  children: [],
};

export const faculty: SegmentNode = {
  name: '교수진',
  segment: 'faculty',
  isPage: true,
  parent: people,
  children: [],
};

export const emeritusFaculty: SegmentNode = {
  name: '역대 교수진',
  segment: 'emeritus-faculty',
  isPage: true,
  parent: people,
  children: [],
};

export const staff: SegmentNode = {
  name: '행정직원',
  segment: 'staff',
  isPage: true,
  parent: people,
  children: [],
};

export const research: SegmentNode = {
  name: '연구·교육',
  segment: 'research',
  isPage: true,
  parent: main,
  children: [],
};

export const researchGroups: SegmentNode = {
  name: '연구·교육 스트림',
  segment: 'groups',
  isPage: true,
  parent: research,
  children: [],
};

export const researchCenters: SegmentNode = {
  name: '연구 센터',
  segment: 'centers',
  isPage: true,
  parent: research,
  children: [],
};

export const researchLabs: SegmentNode = {
  name: '연구실 목록',
  segment: 'labs',
  isPage: true,
  parent: research,
  children: [],
};

export const topConferenceList: SegmentNode = {
  name: 'Top Conference List',
  segment: 'top-conference-list',
  isPage: true,
  parent: research,
  children: [],
};

export const admissions: SegmentNode = {
  name: '입학',
  segment: 'admissions',
  isPage: true,
  parent: main,
  children: [],
};

export const undergraduateAdmission: SegmentNode = {
  name: '학부',
  segment: 'undergraduate',
  isPage: false,
  parent: admissions,
  children: [],
};

export const undergraduateEarlyAdmission: SegmentNode = {
  name: '수시 모집',
  segment: 'early-admission',
  isPage: true,
  parent: undergraduateAdmission,
  children: [],
};

export const undergraduateRegularAdmission: SegmentNode = {
  name: '정시 모집',
  segment: 'regular-admission',
  isPage: true,
  parent: undergraduateAdmission,
  children: [],
};

export const graduateAdmission: SegmentNode = {
  name: '대학원',
  segment: 'graduate',
  isPage: false,
  parent: admissions,
  children: [],
};

export const graduateRegularAdmission: SegmentNode = {
  name: '전기/후기 모집',
  segment: 'regular-admission',
  isPage: true,
  parent: graduateAdmission,
  children: [],
};

export const internationalAdmission: SegmentNode = {
  name: 'International',
  segment: 'international',
  isPage: false,
  parent: admissions,
  children: [],
};

export const internationalUndergraduateAdmission: SegmentNode = {
  name: 'Undergraduate',
  segment: 'undergraduate',
  isPage: true,
  parent: internationalAdmission,
  children: [],
};

export const internationalGraduateAdmission: SegmentNode = {
  name: 'Graduate',
  segment: 'graduate',
  isPage: true,
  parent: internationalAdmission,
  children: [],
};

export const exchangeVisitingProgram: SegmentNode = {
  name: 'Exchange/Visiting Program',
  segment: 'exchange',
  isPage: true,
  parent: internationalAdmission,
  children: [],
};

export const internationalScholarships: SegmentNode = {
  name: 'Scholarships',
  segment: 'scholarships',
  isPage: true,
  parent: internationalAdmission,
  children: [],
};

export const academics: SegmentNode = {
  name: '학사 및 교과',
  segment: 'academics',
  isPage: true,
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
  children: [],
};

export const undergraduateCourses: SegmentNode = {
  name: '교과과정',
  segment: 'courses',
  isPage: true,
  parent: undergraduateAcademics,
  children: [],
};

export const curriculum: SegmentNode = {
  name: '전공 이수 표준 형태',
  segment: 'curriculum',
  isPage: true,
  parent: undergraduateAcademics,
  children: [],
};

export const generalStudies: SegmentNode = {
  name: '필수 교양 과목',
  segment: 'general-studies-requirements',
  isPage: true,
  parent: undergraduateAcademics,
  children: [],
};

export const degree: SegmentNode = {
  name: '졸업 규정',
  segment: 'degree-requirements',
  isPage: true,
  parent: undergraduateAcademics,
  children: [],
};

export const undergraduateCourseChanges: SegmentNode = {
  name: '교과목 변경 내역',
  segment: 'course-changes',
  isPage: true,
  parent: undergraduateAcademics,
  children: [],
};

export const undergraduateScholarship: SegmentNode = {
  name: '장학 제도',
  segment: 'scholarship',
  isPage: true,
  parent: undergraduateAcademics,
  children: [],
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
  segment: 'guide',
  isPage: true,
  parent: graduateAcademics,
  children: [],
};

export const graduateCourses: SegmentNode = {
  name: '교과과정',
  segment: 'courses',
  isPage: true,
  parent: graduateAcademics,
  children: [],
};

export const graduateCourseChanges: SegmentNode = {
  name: '교과목 변경 내역',
  segment: 'course-changes',
  isPage: true,
  parent: graduateAcademics,
  children: [],
};

export const graduateScholarship: SegmentNode = {
  name: '장학 제도',
  segment: 'scholarship',
  isPage: true,
  parent: graduateAcademics,
  children: [],
};

export const reservations: SegmentNode = {
  name: '시설 예약',
  segment: 'reservations',
  isPage: true,
  parent: main,
  children: [],
};

export const reservationIntroduction: SegmentNode = {
  name: '시설 예약 안내',
  segment: 'introduction',
  isPage: true,
  parent: reservations,
  children: [],
};

export const seminarRoom: SegmentNode = {
  name: '세미나실 예약',
  segment: 'seminar-room',
  isPage: false,
  parent: reservations,
  children: [],
};

export const bldg301room417: SegmentNode = {
  name: '301-417 (20석)',
  segment: '301-417',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg301Maldives: SegmentNode = {
  name: '301-MALDIVES (301-521, 11석)',
  segment: '301-521',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg301Hawaii: SegmentNode = {
  name: '301-HAWAII (301-551-4, 20석)',
  segment: '301-551-4',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg301Baekdu: SegmentNode = {
  name: '301-BAEKDU (301-552-1, 4석)',
  segment: '301-552-1',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg301Alps: SegmentNode = {
  name: '301-ALPS (301-552-2, 5석)',
  segment: '301-552-2',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg301Santorini: SegmentNode = {
  name: '301-SANTORINI (301-552-3, 4석)',
  segment: '301-552-3',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg301Jeju: SegmentNode = {
  name: '301-JEJU (301-553-6, 6석)',
  segment: '301-553-6',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg301ProfMeeting: SegmentNode = {
  name: '301-교수회의실 (301-317, 20석)',
  segment: '301-317',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg302room308: SegmentNode = {
  name: '302-308 (46석)',
  segment: '302-308',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg302room309first: SegmentNode = {
  name: '302-309-1 (48석)',
  segment: '302-309-1',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg302room309second: SegmentNode = {
  name: '302-309-2 (8석)',
  segment: '302-309-2',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const bldg302room309third: SegmentNode = {
  name: '302-309-3 (8석)',
  segment: '302-309-3',
  isPage: true,
  parent: seminarRoom,
  children: [],
};

export const labRoom: SegmentNode = {
  name: '실습실 예약',
  segment: 'lab',
  isPage: false,
  parent: reservations,
  children: [],
};

export const softwareLab: SegmentNode = {
  name: '소프트웨어 실습실 (302-311-1, 102석)',
  segment: '302-311-1',
  isPage: true,
  parent: labRoom,
  children: [],
};

export const hardwareLab: SegmentNode = {
  name: '하드웨어 실습실 (302-310-2, 30석)',
  segment: '302-310-2',
  isPage: true,
  parent: labRoom,
  children: [],
};

export const lectureRoom: SegmentNode = {
  name: '공과대학 강의실 예약',
  segment: 'lecture-room',
  isPage: false,
  parent: reservations,
  children: [],
};

export const bldg302room208: SegmentNode = {
  name: '302-208 (116석)',
  segment: '302-208',
  isPage: true,
  parent: lectureRoom,
  children: [],
};

export const bldg302room209: SegmentNode = {
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
community.children = [notice, news, seminar, facultyRecruitment, council];
council.children = [councilIntro, councilMinute, councilBylaws, councilReportList];
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

export const admin: SegmentNode = {
  name: '관련 페이지', // 관리자 페이지 사이드바는 상위 항목 이름이 '관련 페이지'
  segment: 'admin',
  isPage: true,
  parent: null,
  children: [notice, news, seminar],
};

// 10-10

export const tentenProject: SegmentNode = {
  name: '10-10 Project',
  segment: '10-10-project',
  isPage: true,
  parent: null,
  children: [],
};

export const tentenManager: SegmentNode = {
  name: 'Manager',
  segment: 'manager',
  isPage: true,
  parent: tentenProject,
  children: [],
};

export const tentenParticipants: SegmentNode = {
  name: 'Participants(Professors)',
  segment: 'participants',
  isPage: true,
  parent: tentenProject,
  children: [],
};

export const tentenProposal: SegmentNode = {
  name: 'Proposal',
  segment: 'proposal',
  isPage: true,
  parent: tentenProject,
  children: [],
};

// 기존 홈페이지 푸터 링크가 propsal로 이동시는 등 proposal 내용이 우선순위라 판단되어 기존과 다르게 0번째로 배치
tentenProject.children = [tentenProposal, tentenManager, tentenParticipants];
