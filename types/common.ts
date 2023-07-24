export interface Location {
  name: string;
  path: string;
}

export type PageNames = 'main' | 'community' | 'notice' | 'news';

export type PagesUsingTag = 'notice' | 'news';

// constants.ts를 따로 만들까 하다가 일단 여기에 넣어둡니다
// 사실 '소식' 같은 건 페이지라기보단 탭인데 PAGES말고 TABS로 이름을 바꿔야 하나
export const PAGES: { [key in PageNames]: Location } = {
  main: { name: '메인', path: '/' },
  community: { name: '소식', path: '' },
  notice: { name: '공지', path: '/notice' },
  news: { name: '새소식', path: '/news' },
};
