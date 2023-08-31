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
