export const ADMIN_MENU = { slide: '슬라이드쇼 관리', important: '중요 안내 관리' } as const;

export interface SlidePreview {
  id: number;
  title: string;
  createdAt: string;
}

export type ImportantCategory = 'notice' | 'news' | 'seminar';

export interface ImportantPreview {
  id: number;
  title: string;
  createdAt: string;
  category: ImportantCategory;
}

export interface ImportantPostIdentifier {
  id: number;
  category: ImportantCategory;
}
