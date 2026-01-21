// TODO: eslint 문제 이 파일을 제외함으로서 예쁘게 해결하기
/* eslint-disable react-hooks/rules-of-hooks */

import { Page } from '@playwright/test';

import { NoticeCreatePage } from '../pages/community/notice/create.page';
import { NoticePage } from '../pages/community/notice/index.page';
import { SeminarCreatePage } from '../pages/community/seminar/create.page';
import { SeminarPage } from '../pages/community/seminar/index.page';
import { test as base } from './role.fixture';

type PagesFixtures = {
  noticePage: NoticePage;
  noticeCreatePage: NoticeCreatePage;
  seminarPage: SeminarPage;
  seminarCreatePage: SeminarCreatePage;
};

export const test = base.extend<PagesFixtures>({
  noticePage: async ({ page }: { page: Page }, use: (page: NoticePage) => Promise<void>) => {
    await use(new NoticePage(page));
  },
  noticeCreatePage: async (
    { page }: { page: Page },
    use: (page: NoticeCreatePage) => Promise<void>,
  ) => {
    await use(new NoticeCreatePage(page));
  },

   seminarPage: async ({ page }: { page: Page }, use: (page: SeminarPage) => Promise<void>) => {
    await use(new SeminarPage(page));
  },
  seminarCreatePage: async (
    { page }: { page: Page },
    use: (page: SeminarCreatePage) => Promise<void>,
  ) => {
    await use(new SeminarCreatePage(page));
  },
});
