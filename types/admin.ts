export const ADMIN_MENU = { slide: '슬라이드쇼 관리', important: '중요 안내 관리' } as const;

export interface SimpleSlide {
  title: string;
  createdAt: string;
  id: number;
}

export interface SimpleImportant {
  title: string;
  createdAt: string;
  id: number;
  category: 'notice' | 'news' | 'seminar';
}
