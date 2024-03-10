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

export type ResearchSearchResult = {
  total: number;
  results: {
    id: 0;
    name: string;
    researchType: 'RESEARCH' | 'LAB' | 'CONFERENCE';
    partialDescription: string;
    boldStartIndex: number;
    boldEndIndex: number;
  }[];
};

// 입학 탭

export type AcademicsSearchResult = {
  total: number;
  results: {
    id: 0;
    name: string;
    academicsType:
      | 'GUIDE'
      | 'GENERAL_STUDIES_REQUIREMENTS'
      | 'GENERAL_STUDIES_REQUIREMENTS_SUBJECT_CHANGES'
      | 'CURRICULUM'
      | 'DEGREE_REQUIREMENTS'
      | 'DEGREE_REQUIREMENTS_YEAR_LIST'
      | 'COURSE_CHANGES'
      | 'SCHOLARSHIP';
    partialDescription: string;
    boldStartIndex: number;
    boldEndIndex: number;
  }[];
};

// 학사 및 교과??
// TODO: mainType, postType

export type AdmissionsSearchResult = {
  total: number;
  results: {
    id: 0;
    name: string;
    mainType: 'OVERVIEW';
    postType: 'OVERVIEW';
    partialDescription: string;
    boldStartIndex: number;
    boldEndIndex: number;
  }[];
};
