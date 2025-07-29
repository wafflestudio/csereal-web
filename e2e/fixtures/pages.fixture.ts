// TODO: eslint 문제 이 파일을 제외함으로서 예쁘게 해결하기
/* eslint-disable react-hooks/rules-of-hooks */

import { Page } from '@playwright/test';

import { NoticeCreatePage } from '../pages/community/notice/create.page';
import { NoticeDetailPage } from '../pages/community/notice/detail.page';
import { NoticeEditPage } from '../pages/community/notice/edit.page';
import { NoticeListPage } from '../pages/community/notice/index.page';
import { test as base } from './role.fixture';

type PagesFixtures = {
  noticeListPage: NoticeListPage;
  noticeCreatePage: NoticeCreatePage;
  noticeEditPage: NoticeEditPage;
  noticeDetailPage: NoticeDetailPage;
};

export const test = base.extend<PagesFixtures>({
  noticeListPage: async (
    { page }: { page: Page },
    use: (page: NoticeListPage) => Promise<void>,
  ) => {
    await use(new NoticeListPage(page));
  },
  noticeCreatePage: async (
    { page }: { page: Page },
    use: (page: NoticeCreatePage) => Promise<void>,
  ) => {
    await use(new NoticeCreatePage(page));
  },
  noticeEditPage: async (
    { page }: { page: Page },
    use: (page: NoticeEditPage) => Promise<void>,
  ) => {
    await use(new NoticeEditPage(page));
  },
  noticeDetailPage: async (
    { page }: { page: Page },
    use: (page: NoticeDetailPage) => Promise<void>,
  ) => {
    await use(new NoticeDetailPage(page));
  },
});
