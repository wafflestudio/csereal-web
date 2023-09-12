import { ImportantCategory } from './admin';

export const NOTICE_CATEGORY = ['전체', '장학', '학부', '대학원'] as const;

export const NOTICE_TAGS_EN = {
  전체: 'all',
  장학: 'scholarship',
  학부: 'undergraduate',
  대학원: 'graduate',
};

export type NoticeCategoryType = (typeof NOTICE_CATEGORY)[number];

export interface ImportantPostMain {
  category: ImportantCategory;
  id: number;
  title: string;
  summary: string;
}

export interface NoticeListMainType {
  all: NoticeMainPreview[];
  scholarship: NoticeMainPreview[];
  undergraduate: NoticeMainPreview[];
  graduate: NoticeMainPreview[];
}

export interface NoticeMainPreview {
  createdAt: string;
  title: string;
  id: number;
}
