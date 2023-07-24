export interface Location {
  name: string;
  path: string;
}

export type PageNames =
  | 'main'
  | 'community'
  | 'notice'
  | 'news'
  | 'seminar'
  | 'facultyRecruitment'
  | 'scholarship'
  | 'international';

export type PagesAcceptingTagQuery = 'notice' | 'news';

type TabsNames =
  | 'about'
  | 'community'
  | 'people'
  | 'research'
  | 'admissions'
  | 'academies'
  | 'reservation';

// constants.ts를 따로 만들까 하다가 일단 여기에 넣어둡니다
export const PAGES: { [key in PageNames]: Location } = {
  main: { name: '메인', path: '/' },
  community: { name: '소식', path: '' },
  news: { name: '새 소식', path: '/news' },
  notice: { name: '공지', path: '/notice' },
  scholarship: { name: '장학', path: '/scholarship' },
  seminar: { name: '세미나', path: '/seminar' },
  facultyRecruitment: { name: '신임교수초빙', path: '/faculty-recruitment' },
  international: { name: '국제(International)', path: '/international' },
};

export const TABS: { [key in TabsNames]: Location[] } = {
  about: [],
  community: [
    PAGES.news,
    PAGES.notice,
    PAGES.scholarship,
    PAGES.facultyRecruitment,
    PAGES.international,
  ],
  people: [],
  research: [],
  admissions: [],
  academies: [],
  reservation: [],
};
