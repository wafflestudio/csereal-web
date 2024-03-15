// 소개 탭

export type AboutSearchResult = {
  total: number;
  results: AboutPreview[];
};

export type AboutPreview = {
  id: 0;
  name: string;
  aboutPostType:
    | 'OVERVIEW'
    | 'GREETINGS'
    | 'HISTORY'
    | 'FUTURE_CAREERS'
    | 'CONTACT'
    | 'STUDENT_CLUBS'
    | 'FACILITIES'
    | 'DIRECTIONS';
  partialDescription: string;
  boldStartIndex: number;
  boldEndIndex: number;
};

// 소식 탭

export type NoticeSearchResult = {
  total: number;
  results: {
    id: number;
    title: string;
    createdAt: string;
    partialDescription: string;
    boldStartIndex: number;
    boldEndIndex: number;
  }[];
};

export type NewsSearchResult = {
  total: number;
  results: {
    id: number;
    title: string;
    date: string;
    partialDescription: string;
    boldStartIndex: number;
    boldEndIndex: number;
    tags: string[];
    imageUrl: string | null;
  }[];
};

// 구성원 탭

export type MemberSearchResult = {
  total: number;
  results: {
    id: 0;
    name: string;
    academicRankOrRole: string;
    imageURL: string;
    memberType: 'PROFESSOR' | 'STAFF';
  }[];
};

// 연구 탭

export type ResearchType = 'RESEARCH' | 'LAB' | 'CONFERENCE';

export type ResearchSearchResult = {
  total: number;
  results: {
    id: 0;
    name: string;
    researchType: ResearchType;
    partialDescription: string;
    boldStartIndex: number;
    boldEndIndex: number;
  }[];
};

// 입학 탭

export type AcademicType =
  | 'GUIDE'
  | 'GENERAL_STUDIES_REQUIREMENTS'
  | 'GENERAL_STUDIES_REQUIREMENTS_SUBJECT_CHANGES'
  | 'CURRICULUM'
  | 'DEGREE_REQUIREMENTS'
  | 'DEGREE_REQUIREMENTS_YEAR_LIST'
  | 'COURSE_CHANGES'
  | 'SCHOLARSHIP';

export type AcademicsSearchResult = {
  total: number;
  results: {
    id: 0;
    name: string;
    academicsType: AcademicType;
    partialDescription: string;
    boldStartIndex: number;
    boldEndIndex: number;
  }[];
};

// 학사 및 교과

export type AdmissionsSearchResult = {
  total: number;
  admissions: {
    id: 0;
    name: string;
    mainType: string;
    postType: string;
    partialDescription: string;
    boldStartIndex: number;
    boldEndIndex: number;
  }[];
};
