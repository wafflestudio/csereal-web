export const ADMIN_MENU = { slide: '슬라이드쇼 관리', important: '중요 안내 관리' } as const;

export interface SlidePreview {
  title: string;
  createdAt: string;
  id: number;
}

export type ImportantCategory = 'notice' | 'news' | 'seminar';

export interface ImportantPreview {
  title: string;
  createdAt: string;
  id: number;
  category: ImportantCategory;
}

export interface ImportantPostIdentifier {
  id: number;
  category: ImportantCategory;
}
