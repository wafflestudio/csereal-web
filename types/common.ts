export interface Location {
  name: string;
  path: string;
}

export type PageNames = 'main' | 'communication' | 'notice';

// constants.ts를 따로 만들까 하다가 일단 여기에 넣어둡니다
export const PAGES: { [key in PageNames]: Location } = {
  main: { name: '메인', path: '/' },
  communication: { name: '소식', path: '' },
  notice: { name: '공지', path: '/notice' },
};
