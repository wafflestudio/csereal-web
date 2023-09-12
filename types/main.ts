import { ImportantCategory } from './admin';

export const NOTICE_CATEGORY = ['전체', '장학', '학부', '대학원'] as const;

export type NoticeCategoryType = (typeof NOTICE_CATEGORY)[number];

export interface ImportantPostMain {
  category: ImportantCategory;
  id: number;
  title: string;
  summary: string;
}

export interface NoticeListMainType {
  all: NoticeMain[];
  scholarship: NoticeMain[];
  undergraduate: NoticeMain[];
  graduate: NoticeMain[];
}

export interface NoticeMain {
  createdAt: string;
  title: string;
  id: number;
}

export interface SlideMain {
  id: number;
  title: string;
  imageURL: string;
  description: string;
}

export interface MainContents {
  slides: SlideMain[];
  notices: NoticeListMainType;
  importants: ImportantPostMain[];
}
