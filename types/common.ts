export interface Location {
  name: string;
  path: string;
}

export type PageNames = 'main' | 'communication' | 'notice' | 'editor' | 'viewer';

// constants.ts를 따로 만들까 하다가 일단 여기에 넣어둡니다
export const PAGES: { [key in PageNames]: Location } = {
  main: { name: '메인', path: '/' },
  communication: { name: '소식', path: '' },
  notice: { name: '공지', path: '/notice' },
  editor: { name: '에디터', path: '/editor' },
  viewer: { name: '뷰어', path: '/viewer' },
};
