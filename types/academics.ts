export interface Guide {
  description: string;
  attachments: {
    name: string;
    url: string;
    bytes: number;
  }[];
}

// TODO: number 0, 1, 2, 3, 4로 변경 예정
export const GRADE = ['대학원', '1학년', '2학년', '3학년', '4학년'] as const;
export type Grade = (typeof GRADE)[number];

export const CLASSIFICATION = ['전공필수', '전공선택', '교양'] as const;
export type Classification = (typeof CLASSIFICATION)[number];

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
  attachments: {
    id: number;
    url: string;
    name: string;
    bytes: number;
  }[];
}

export interface Curriculum {
  description: string;
  year: number;
}
