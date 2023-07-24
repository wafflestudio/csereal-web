export interface Location {
  name: string;
  path: string;
}

export enum PageNames {
  main = 'main',
  community = 'community',
  notice = 'notice',
  news = 'news',
}

// constants.ts를 따로 만들까 하다가 일단 여기에 넣어둡니다
// 사실 '소식' 같은 건 페이지라기보단 탭인데 PAGES말고 TABS로 이름을 바꿔야 하나
export const PAGES: { [key in PageNames]: Location } = {
  [PageNames.main]: { name: '메인', path: '/' },
  [PageNames.community]: { name: '소식', path: '' },
  [PageNames.notice]: { name: '공지', path: '/notice' },
  [PageNames.news]: { name: '새소식', path: '/news' },
};
