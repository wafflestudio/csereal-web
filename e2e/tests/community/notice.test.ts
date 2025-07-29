import { expect } from '@playwright/test';

import { test } from '../../fixtures';

test.describe('Notice creation', () => {
  test('should allow STAFF to create a new notice', async ({
    page,
    loginAs,
    noticePage,
    noticeCreatePage,
  }) => {
    // 1. Arrange
    await noticePage.goto();
    const noticeTitle = `[Test] New Notice - ${Date.now()}`;
    const noticeContent = 'This is a test notice content.';
    await loginAs('STAFF');

    // 2. Act
    await noticePage.clickNewPostButton();
    await expect(page).toHaveURL('/community/notice/create');
    await noticeCreatePage.fillTitle(noticeTitle);
    await noticeCreatePage.fillContent(noticeContent);
    // TODO: suneditor 비동기 로드 때문인지 몇 초 대기해야 제대로 작동함
    await page.waitForTimeout(1000);
    await noticeCreatePage.clickSubmitButton();

    // 3. Assert
    await expect(page.getByText(noticeTitle).first()).toBeVisible();
  });
});
