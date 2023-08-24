export interface Guide {
  description: string;
}

export type Year = '1학년' | '2학년' | '3학년' | '4학년' | '대학원';
export type Classification = '전공필수' | '전공선택' | '교양';

export interface Course {
  id: number;
  name: string;
  description: string;
  year: Year;
  classification: Classification;
  credit: number;
  code: string;
}

export type SortOption = '학년' | '교과목 구분' | '학점';

export interface CourseChanges {
  year: number;
  description: string;
}
