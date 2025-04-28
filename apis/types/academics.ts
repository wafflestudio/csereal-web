import { Attachment } from './attachment';

import { Language } from '../../types/language';

export type StudentType = 'undergraduate' | 'graduate';

export interface Guide {
  description: string;
  attachments: Attachment[];
}

export const GRADE = ['대학원', '1학년', '2학년', '3학년', '4학년'] as const;

export const CLASSIFICATION = {
  전공필수: 'RM',
  전공선택: 'EM',
  교양: 'LE',
} as const;
export type Classification = keyof typeof CLASSIFICATION;
export type ClassificationEn = (typeof CLASSIFICATION)[keyof typeof CLASSIFICATION];

export interface Course {
  code: string;
  credit: number;
  grade: number;
  studentType: StudentType;
  ko: { name: string; description: string; classification: Classification };
  en: { name: string; description: string; classification: ClassificationEn };
}

export type SortOption = '학년' | '교과목 구분' | '학점';

export type ViewOption = '카드형' | '목록형';

export interface ScholarshipList {
  description: string;
  scholarships: Pick<Scholarship, 'id' | 'name'>[];
}

export interface Scholarship {
  id: number;
  language: Language;
  name: string;
  description: string;
}

export interface DegreeRequirements {
  description: string;
  attachments: Attachment[];
}

export interface TimelineContent {
  year: number;
  description: string;
  attachments: Attachment[];
}
