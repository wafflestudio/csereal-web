export interface Location {
  name: string;
  path: string;
}

const Routes = {};

export type PageNames =
  | 'main'
  | 'community'
  | 'notice'
  | 'news'
  | 'seminar'
  | 'facultyRecruitment'
  | 'scholarship'
  | 'international';

export type PagesAcceptingTagQuery = 'notice' | 'news';

type TabNames =
  | 'about'
  | 'community'
  | 'people'
  | 'research'
  | 'admissions'
  | 'academies'
  | 'reservation';

// constants.ts를 따로 만들까 하다가 일단 여기에 넣어둡니다
export const PAGES: { [key in PageNames]: Location } = {
  main: { name: '메인', path: '/' },
  community: { name: '소식', path: '' },
  news: { name: '새 소식', path: '/news' },
  notice: { name: '공지', path: '/notice' },
  scholarship: { name: '장학', path: '/scholarship' },
  seminar: { name: '세미나', path: '/seminar' },
  facultyRecruitment: { name: '신임교수초빙', path: '/faculty-recruitment' },
  international: { name: '국제(International)', path: '/international' },
};

export const TABS: { [key in TabNames]: Location[] } = {
  about: [],
  community: [
    PAGES.news,
    PAGES.notice,
    PAGES.scholarship,
    PAGES.facultyRecruitment,
    PAGES.international,
  ],
  people: [],
  research: [],
  admissions: [],
  academies: [],
  reservation: [],
};

interface Location2 {
  name: string;
  path: string;
  isPage: boolean;
  children: Location2[] | null;
  parent: Location2 | null;
}

const main: Location2 = {
  name: '홈',
  path: '',
  isPage: true,
  parent: null,
  children: [],
};

const about: Location2 = {
  name: '소개',
  path: 'overview',
  isPage: false,
  parent: main,
  children: [],
};

const overview: Location2 = {
  name: '학부 소개',
  path: 'overview',
  isPage: true,
  parent: about,
  children: null,
};

const greetings: Location2 = {
  name: '학부장 인사말',
  path: 'greetings',
  isPage: true,
  parent: about,
  children: null,
};

const futureCareers: Location2 = {
  name: '졸업생 진로',
  path: 'future-careers',
  isPage: true,
  parent: about,
  children: null,
};

const studentClubs: Location2 = {
  name: '동아리 소개',
  path: 'student-clubs',
  isPage: true,
  parent: about,
  children: null,
};

const facilities: Location2 = {
  name: '시설 안내',
  path: 'facilities',
  isPage: true,
  parent: about,
  children: null,
};

const contact: Location2 = {
  name: '연락처',
  path: 'contact',
  isPage: true,
  parent: about,
  children: null,
};

const directions: Location2 = {
  name: '찾아오는 길',
  path: 'directions',
  isPage: true,
  parent: about,
  children: null,
};

const community: Location2 = {
  name: '소식',
  path: 'community',
  isPage: false,
  parent: main,
  children: [],
};

const news: Location2 = {
  name: '새소식',
  path: 'news',
  isPage: true,
  parent: community,
  children: null,
};

const notice: Location2 = {
  name: '공지사항',
  path: 'notice',
  isPage: true,
  parent: community,
  children: null,
};

const seminar: Location2 = {
  name: '세미나',
  path: 'seminar',
  isPage: true,
  parent: community,
  children: null,
};

const facultyRecruitment: Location2 = {
  name: '신임교수초빙',
  path: 'faculty-recruitment',
  isPage: true,
  parent: community,
  children: null,
};

const international: Location2 = {
  name: '국제',
  path: 'international',
  isPage: true,
  parent: community,
  children: null,
};

const people: Location2 = {
  name: '구성원',
  path: 'people',
  isPage: false,
  parent: main,
  children: [],
};

const faculty: Location2 = {
  name: '교수진',
  path: 'faculty',
  isPage: true,
  parent: people,
  children: null,
};

const emeritusFaculty: Location2 = {
  name: '역대 교수진',
  path: 'emeritus-faculty',
  isPage: true,
  parent: people,
  children: null,
};

const staff: Location2 = {
  name: '행정직원',
  path: 'staff',
  isPage: true,
  parent: people,
  children: null,
};

const research: Location2 = {
  name: '연구',
  path: 'research',
  isPage: false,
  parent: main,
  children: [],
};

const researchGroups: Location2 = {
  name: '연구 그룹',
  path: 'research-groups',
  isPage: true,
  parent: research,
  children: null,
};

const researchCenters: Location2 = {
  name: '연구 센터',
  path: 'research-centers',
  isPage: true,
  parent: research,
  children: null,
};

const laboratories: Location2 = {
  name: '연구실',
  path: 'laboratories',
  isPage: true,
  parent: research,
  children: null,
};

const topConferenceList: Location2 = {
  name: 'Top Conference List',
  path: 'top-conference-list',
  isPage: true,
  parent: research,
  children: null,
};

const admissions: Location2 = {
  name: '입학',
  path: 'admissions',
  isPage: false,
  parent: main,
  children: [],
};

const undergraduateAdmission: Location2 = {
  name: '학부',
  path: 'undergraduate',
  isPage: true,
  parent: admissions,
  children: [],
};

const earlyAmission: Location2 = {
  name: '수시',
  path: 'early-amission',
  isPage: true,
  parent: undergraduateAdmission,
  children: null,
};

const regularAmission: Location2 = {
  name: '정시',
  path: 'regular-amission',
  isPage: true,
  parent: undergraduateAdmission,
  children: null,
};

const graduateAdmission: Location2 = {
  name: '대학원',
  path: 'graduate',
  isPage: true,
  parent: admissions,
  children: null,
};

const academics: Location2 = {
  name: '학사 및 교과',
  path: 'academics',
  isPage: false,
  parent: main,
  children: [],
};

const undergraduate: Location2 = {
  name: '학부',
  path: 'undergraduate',
  isPage: false,
  parent: academics,
  children: [],
};

const undergraduateGuide: Location2 = {
  name: '학부 안내',
  path: 'guide',
  isPage: true,
  parent: undergraduate,
  children: null,
};

const undergraduateCourses: Location2 = {
  name: '교과목 정보',
  path: 'courses',
  isPage: true,
  parent: undergraduate,
  children: null,
};

const curriculum: Location2 = {
  name: '전공 이수 표준 형태',
  path: 'curriculum',
  isPage: true,
  parent: undergraduate,
  children: null,
};

const generalStudies: Location2 = {
  name: '필수 교양 과목',
  path: 'general-studies-requirements',
  isPage: true,
  parent: undergraduate,
  children: null,
};

const degree: Location2 = {
  name: '졸업 규정',
  path: 'degree-requirements',
  isPage: true,
  parent: undergraduate,
  children: null,
};

const undergraduateCourseChanges: Location2 = {
  name: '교과목 변경 내역',
  path: 'course-changes',
  isPage: true,
  parent: undergraduate,
  children: null,
};

const undergraduateScholarship: Location2 = {
  name: '장학 제도',
  path: 'scholarship',
  isPage: true,
  parent: undergraduate,
  children: null,
};

const graduate: Location2 = {
  name: '학부',
  path: 'graduate',
  isPage: false,
  parent: academics,
  children: [],
};

const graduateGuide: Location2 = {
  name: '대학원 안내',
  path: 'courses',
  isPage: true,
  parent: graduate,
  children: null,
};

const graduateCourses: Location2 = {
  name: '교과목 정보',
  path: 'courses',
  isPage: true,
  parent: graduate,
  children: null,
};

const graduateCourseChanges: Location2 = {
  name: '교과목 변경 내역',
  path: 'course-changes',
  isPage: true,
  parent: graduate,
  children: null,
};

const graduateScholarship: Location2 = {
  name: '장학 제도',
  path: 'scholarship',
  isPage: true,
  parent: graduate,
  children: null,
};

const reservations: Location2 = {
  name: '시설 예약',
  path: 'reservations',
  isPage: false,
  parent: main,
  children: [],
};

const seminarRoom: Location2 = {
  name: '세미나실',
  path: 'seminar-room',
  isPage: true,
  parent: reservations,
  children: [],
};

const bldg301room417: Location2 = {
  name: '301-417 (20석)',
  path: '301-417',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

const bldg301Maldives: Location2 = {
  name: '301-MALDIVES (11석)',
  path: '301-521',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

const bldg301Hawaii: Location2 = {
  name: '301-HAWAII (20석)',
  path: '301-551-4',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

const bldg301Baekdu: Location2 = {
  name: '301-BAEKDU (4석)',
  path: '301-552-1',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

const bldg301Alps: Location2 = {
  name: '301-ALPS (5석)',
  path: '301-552-2',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

const bldg301Santorini: Location2 = {
  name: '301-SANTORINI (4석)',
  path: '301-552-3',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

const bldg301Jeju: Location2 = {
  name: '301-JEJU (6석)',
  path: '301-553-6',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

const bldg301ProfMeeting: Location2 = {
  name: '301-교수회의실 (20석)',
  path: '301-317',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

const bldg302room308: Location2 = {
  name: '302-308 (46석)',
  path: '302-308',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

const buld302room309first: Location2 = {
  name: '302-309-1 (48석)',
  path: '302-309-1',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

const buld302room309second: Location2 = {
  name: '302-309-2 (8석)',
  path: '302-309-2',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

const buld302room309third: Location2 = {
  name: '302-309-3 (8석)',
  path: '302-309-3',
  isPage: true,
  parent: seminarRoom,
  children: null,
};

const lab: Location2 = {
  name: '실습실 예약',
  path: 'lab',
  isPage: true,
  parent: reservations,
  children: [],
};

const softwareLab: Location2 = {
  name: '소프트웨어 실습실 (102석)',
  path: '302-311-1',
  isPage: true,
  parent: lab,
  children: null,
};

const hardwareLab: Location2 = {
  name: '하드웨어 실습실 (30석)',
  path: '302-310-2',
  isPage: true,
  parent: lab,
  children: null,
};

const classroom: Location2 = {
  name: '공과대학 강의실 예약',
  path: 'classroom',
  isPage: true,
  parent: reservations,
  children: [],
};

const bldg302room208: Location2 = {
  name: '302-208 (116석)',
  path: '302-208',
  isPage: true,
  parent: classroom,
  children: null,
};

const bldg302room209: Location2 = {
  name: '302-209 (90석)',
  path: '302-209',
  isPage: true,
  parent: classroom,
  children: null,
};

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
