import { expect } from '@playwright/test';

import { test } from '../../../fixtures/index.fixture';

test.describe('공지사항 작성 페이지 (/community/notice/create)', () => {
  test('제목과 내용을 포함한 기본 공지사항을 작성할 수 있다', async ({
    page,
    loginAs,
    noticeListPage,
    noticeCreatePage,
  }) => {
    // 1. Arrange
    const noticeTitle = `[테스트] 기본 공지사항 - ${Date.now()}`;
    const noticeContent = '이것은 테스트용 공지사항 내용입니다.';

    await noticeListPage.goto();
    await loginAs('STAFF');

    // 2. Act
    await noticeListPage.clickNewPostButton();
    await expect(page).toHaveURL('/community/notice/create');

    await noticeCreatePage.fillTitle(noticeTitle);
    await noticeCreatePage.fillContent(noticeContent);
    await noticeCreatePage.clickSubmitButton();

    // 3. Assert
    await expect(page.getByText(noticeTitle).first()).toBeVisible();
  });

  test.skip('제목, 내용, 태그, 첨부파일을 포함한 기본 공지사항을 작성할 수 있다', async ({
    page,
    loginAs,
    noticeListPage,
    noticeCreatePage,
  }) => {
    // 1. Arrange
    const noticeTitle = `[테스트] 기본 공지사항 - ${Date.now()}`;
    const noticeContent = '이것은 테스트용 공지사항 내용입니다.';
    // const testTag = '테스트';

    await loginAs('STAFF');
    await noticeListPage.goto();

    // 2. Act
    await noticeListPage.clickNewPostButton();
    await expect(page).toHaveURL('/community/notice/create');

    await noticeCreatePage.fillTitle(noticeTitle);
    await noticeCreatePage.fillContent(noticeContent);
    // TODO: 태그 기능이 실제로 구현되어 있는지 확인 후 활성화
    // await noticeCreatePage.addTag(testTag);

    // TODO: 실제 테스트 파일 업로드 (테스트용 파일 경로 설정 필요)
    // await noticeCreatePage.uploadAttachment('e2e/fixtures/test-files/sample.pdf');

    await page.waitForTimeout(1000); // suneditor 로드 대기
    await noticeCreatePage.clickSubmitButton();

    // 3. Assert
    await expect(page.getByText(noticeTitle).first()).toBeVisible();
  });

  test.skip('중요 안내로 공지사항을 작성할 수 있다', async ({
    page,
    loginAs,
    noticeListPage,
    noticeCreatePage,
  }) => {
    // 1. Arrange
    const importantNoticeTitle = `[중요] 중요 안내 공지사항 - ${Date.now()}`;
    const noticeContent = '이것은 중요한 공지사항입니다.';

    await loginAs('STAFF');
    await noticeListPage.goto();

    // 2. Act
    await noticeListPage.clickNewPostButton();
    await noticeCreatePage.fillTitle(importantNoticeTitle);
    await noticeCreatePage.fillContent(noticeContent);
    // TODO: 중요 안내 토글 기능이 실제로 구현되어 있는지 확인 후 활성화
    // await noticeCreatePage.toggleImportant();

    await page.waitForTimeout(1000);
    await noticeCreatePage.clickSubmitButton();

    // 3. Assert
    await expect(page.getByText(importantNoticeTitle).first()).toBeVisible();
    // TODO: 중요 안내 표시 UI 확인 (실제 구현에 따라 assertion 추가 필요)
  });

  test.skip('비공개 글로 공지사항을 작성할 수 있다', async ({
    page,
    loginAs,
    noticeListPage,
    noticeCreatePage,
  }) => {
    // 1. Arrange
    const privateNoticeTitle = `[비공개] 비공개 공지사항 - ${Date.now()}`;
    const noticeContent = '이것은 비공개 공지사항입니다.';

    await loginAs('STAFF');
    await noticeListPage.goto();

    // 2. Act
    await noticeListPage.clickNewPostButton();
    await noticeCreatePage.fillTitle(privateNoticeTitle);
    await noticeCreatePage.fillContent(noticeContent);
    // TODO: 비공개 토글 기능이 실제로 구현되어 있는지 확인 후 활성화
    // await noticeCreatePage.togglePrivate();

    await page.waitForTimeout(1000);
    await noticeCreatePage.clickSubmitButton();

    // 3. Assert
    await expect(page.getByText(privateNoticeTitle).first()).toBeVisible();
    // TODO: 비공개 표시 UI 확인 (실제 구현에 따라 assertion 추가 필요)
  });

  test.skip('목록 상단 고정으로 공지사항을 작성할 수 있다', async ({
    page,
    loginAs,
    noticeListPage,
    noticeCreatePage,
  }) => {
    // 1. Arrange
    const pinnedNoticeTitle = `[고정] 상단 고정 공지사항 - ${Date.now()}`;
    const noticeContent = '이것은 상단에 고정될 공지사항입니다.';

    await loginAs('STAFF');
    await noticeListPage.goto();

    // 2. Act
    await noticeListPage.clickNewPostButton();
    await noticeCreatePage.fillTitle(pinnedNoticeTitle);
    await noticeCreatePage.fillContent(noticeContent);
    // TODO: 상단 고정 토글 기능이 실제로 구현되어 있는지 확인 후 활성화
    // await noticeCreatePage.togglePinned();

    await page.waitForTimeout(1000);
    await noticeCreatePage.clickSubmitButton();

    // 3. Assert
    await expect(page.getByText(pinnedNoticeTitle).first()).toBeVisible();

    // 목록 페이지로 이동하여 상단 고정 확인
    await noticeListPage.goto();
    // TODO: 고정된 글이 상단에 위치하는지 확인 (실제 UI 구조에 따라 수정 필요)
  });

  test.skip('메인 페이지 중요 안내에 표시되는 공지사항을 작성할 수 있다', async ({
    page,
    loginAs,
    noticeListPage,
    noticeCreatePage,
  }) => {
    // 1. Arrange
    const mainDisplayNoticeTitle = `[메인표시] 메인 페이지 표시 공지사항 - ${Date.now()}`;
    const noticeContent = '이것은 메인 페이지에 표시될 공지사항입니다.';

    await loginAs('STAFF');
    await noticeListPage.goto();

    // 2. Act
    await noticeListPage.clickNewPostButton();
    await noticeCreatePage.fillTitle(mainDisplayNoticeTitle);
    await noticeCreatePage.fillContent(noticeContent);
    // TODO: 메인 표시 토글 기능이 실제로 구현되어 있는지 확인 후 활성화
    // await noticeCreatePage.toggleMainDisplay();

    await page.waitForTimeout(1000);
    await noticeCreatePage.clickSubmitButton();

    // 3. Assert
    await expect(page.getByText(mainDisplayNoticeTitle).first()).toBeVisible();

    // 메인 페이지로 이동하여 중요 안내 영역에 표시되는지 확인
    await page.goto('/');
    // TODO: 메인 페이지 중요 안내 영역 UI 확인 (실제 구현에 따라 assertion 추가 필요)
  });

  test.skip('필수 필드가 비어있으면 공지사항을 작성할 수 없다', async ({
    page,
    loginAs,
    noticeListPage,
    noticeCreatePage,
  }) => {
    await loginAs('STAFF');
    await noticeListPage.goto();
    await noticeListPage.clickNewPostButton();

    // 제목만 입력하고 내용 없이 제출 시도
    await noticeCreatePage.fillTitle('제목만 있는 공지사항');
    await noticeCreatePage.clickSubmitButton();

    // 에러 메시지 또는 제출 실패 확인
    // TODO: 실제 폼 검증 방식에 따라 assertion 수정 필요
    await expect(page).toHaveURL('/community/notice/create'); // 페이지가 그대로 유지되는지 확인
  });
});
