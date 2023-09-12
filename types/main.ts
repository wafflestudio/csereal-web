import { ImportantCategory } from './admin';

export const NOTICE_CATEGORY = ['전체', '장학', '학부', '대학원'] as const;

export type NoticeCategoryType = (typeof NOTICE_CATEGORY)[number];

export interface ImportantPostMain {
  category: ImportantCategory;
  id: number;
  title: string;
  summary: string;
}
