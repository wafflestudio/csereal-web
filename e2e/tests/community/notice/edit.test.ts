import { expect } from '@playwright/test';

import { test } from '../../../fixtures/index.fixture';

test.describe('공지사항 수정 페이지 (/community/notice/:id/edit)', () => {
  test('공지사항 제목을 수정할 수 있다', async ({
    page,
    loginAs,
    noticeEditPage,
    noticeDetailPage,
    noticeCreatePage,
    noticeListPage,
  }) => {
    // 1. Arrange
    await noticeListPage.goto();
    await loginAs('STAFF');
    await noticeCreatePage.goto();

    const noticeTitle = `[테스트] 기본 공지사항 - ${Date.now()}`;
    const noticeContent = '이것은 테스트용 공지사항 내용입니다.';
    await noticeCreatePage.fillTitle(noticeTitle);
    await noticeCreatePage.fillContent(noticeContent);
    await noticeCreatePage.clickSubmitButton();

    await noticeListPage.goto();
    await page.waitForLoadState('networkidle');
    await noticeListPage.clickNoticeByTitle(noticeTitle);

    // 2. Act
    const updatedTitle = `[수정완료] 수정된 공지사항 제목 - ${Date.now()}`;
    await noticeDetailPage.clickEditButton();
    await noticeEditPage.fillTitle(updatedTitle);
    await noticeEditPage.clickSubmitButton();

    // 3. Assert
    await expect(page.getByText(updatedTitle).first()).toBeVisible();
  });

  test.skip('공지사항 내용을 수정할 수 있다', async () => {});

  test.skip('공지사항에 태그를 추가할 수 있다', async () => {});

  test.skip('공지사항 옵션들을 수정할 수 있다', async () => {});

  test.skip('첨부파일을 추가할 수 있다', async () => {});

  test.skip('수정 권한이 없는 사용자는 수정 페이지에 접근할 수 없다', async () => {});
});
