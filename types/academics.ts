export interface Guide {
  description: string;
  attachments: {
    name: string;
    url: string;
    bytes: number;
  }[];
}

export type Grade = '1학년' | '2학년' | '3학년' | '4학년' | '대학원';
export type Classification = '전공필수' | '전공선택' | '교양';

export interface Course {
  name: string;
  description: string;
  grade: Grade;
  classification: Classification;
  credit: number;
  code: string;
}

export type SortOption = '학년' | '교과목 구분' | '학점';

export type ViewOption = '카드형' | '목록형';

export interface CourseChange {
  year: number;
  description: string;
}

export interface GeneralStudiesRequirements {
  overview: string;
  subjectChanges: string;
  generalStudies: {
    id: number;
    year: number;
    description: string;
  }[];
}

export interface ScholarshipList {
  description: string;
  scholarships: Pick<Scholarship, 'id' | 'name'>[];
}

export interface Scholarship {
  id: number;
  name: string;
  description: string;
}
export interface DegreeRequirements {
  description: string;
  yearList: {
    year: number;
    attachments: {
      name: string;
      url: string;
      bytes: number;
    }[];
  }[];
}

export interface Curriculum {
  description: string;
  year: number;
}
