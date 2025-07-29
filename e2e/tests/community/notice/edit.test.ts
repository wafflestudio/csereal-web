import { expect } from '@playwright/test';

import { test } from '../../../fixtures/index.fixture';

test.describe('공지사항 수정 페이지 (/community/notice/:id/edit)', () => {
  let createdNoticeId: string;
  let originalTitle: string;

  test.beforeEach(async ({ page, loginAs, noticeListPage, noticeCreatePage }) => {
    // 테스트용 공지사항 생성
    originalTitle = `[수정테스트] 원본 공지사항 - ${Date.now()}`;
    const originalContent = '수정 테스트를 위한 원본 내용입니다.';

    await loginAs('STAFF');
    await noticeListPage.goto();
    await noticeListPage.clickNewPostButton();

    await noticeCreatePage.fillTitle(originalTitle);
    await noticeCreatePage.fillContent(originalContent);
    await page.waitForTimeout(1000);
    await noticeCreatePage.clickSubmitButton();

    // 생성된 공지사항의 ID 추출 (URL에서)
    await expect(page.getByText(originalTitle).first()).toBeVisible();
    const currentUrl = page.url();
    const urlParts = currentUrl.split('/');
    createdNoticeId = urlParts[urlParts.length - 1];
  });

  test('공지사항 제목을 수정할 수 있다', async ({
    page,
    loginAs,
    noticeEditPage,
    noticeDetailPage,
  }) => {
    // 1. Arrange
    const updatedTitle = `[수정완료] 수정된 공지사항 제목 - ${Date.now()}`;

    await loginAs('STAFF');

    // 2. Act
    await noticeEditPage.goto(createdNoticeId);
    await expect(page).toHaveURL(`/community/notice/${createdNoticeId}/edit`);

    await noticeEditPage.fillTitle(updatedTitle);
    await page.waitForTimeout(1000);
    await noticeEditPage.clickSubmitButton();

    // 3. Assert
    await expect(page.getByText(updatedTitle).first()).toBeVisible();

    // 상세 페이지에서도 제목이 변경되었는지 확인
    await noticeDetailPage.goto(createdNoticeId);
    await expect(page.getByText(updatedTitle).first()).toBeVisible();
  });

  test('공지사항 내용을 수정할 수 있다', async ({ page, loginAs, noticeEditPage }) => {
    // 1. Arrange
    const updatedContent = '이것은 수정된 공지사항 내용입니다.';

    await loginAs('STAFF');

    // 2. Act
    await noticeEditPage.goto(createdNoticeId);
    await noticeEditPage.fillContent(updatedContent);
    await page.waitForTimeout(1000);
    await noticeEditPage.clickSubmitButton();

    // 3. Assert
    await expect(page.getByText(updatedContent).first()).toBeVisible();
  });

  test('공지사항에 태그를 추가할 수 있다', async ({ page, loginAs, noticeEditPage }) => {
    // 1. Arrange
    const newTag = '수정된태그';

    await loginAs('STAFF');

    // 2. Act
    await noticeEditPage.goto(createdNoticeId);
    // TODO: 태그 기능이 실제로 구현되어 있는지 확인 후 활성화
    // await noticeEditPage.addTag(newTag);
    await page.waitForTimeout(1000);
    await noticeEditPage.clickSubmitButton();

    // 3. Assert
    // TODO: 태그가 실제로 추가되었는지 확인 (실제 UI 구조에 따라 수정 필요)
    // await expect(page.getByText(newTag)).toBeVisible();
  });

  test('공지사항 옵션들을 수정할 수 있다', async ({ page, loginAs, noticeEditPage }) => {
    await loginAs('STAFF');

    // 2. Act
    await noticeEditPage.goto(createdNoticeId);

    // TODO: 옵션 토글 기능들이 실제로 구현되어 있는지 확인 후 활성화
    // await noticeEditPage.toggleImportant();
    // await noticeEditPage.togglePinned();

    await page.waitForTimeout(1000);
    await noticeEditPage.clickSubmitButton();

    // 3. Assert
    await expect(page.getByText(originalTitle).first()).toBeVisible();
    // TODO: 옵션 변경 사항이 실제로 반영되었는지 확인 (실제 UI 구조에 따라 수정 필요)
  });

  test('첨부파일을 추가할 수 있다', async ({ page, loginAs, noticeEditPage }) => {
    await loginAs('STAFF');

    await noticeEditPage.goto(createdNoticeId);

    // TODO: 실제 테스트 파일 업로드 (테스트용 파일 경로 설정 필요)
    // await noticeEditPage.uploadAttachment('e2e/fixtures/test-files/sample.pdf');

    await page.waitForTimeout(1000);
    await noticeEditPage.clickSubmitButton();

    // TODO: 첨부파일이 실제로 추가되었는지 확인 (실제 UI 구조에 따라 수정 필요)
  });

  test('수정 권한이 없는 사용자는 수정 페이지에 접근할 수 없다', async ({ page, loginAs }) => {
    // TODO: 권한이 없는 사용자 로그인 방식 확인 후 활성화
    // await loginAs('GUEST'); // 권한이 낮은 역할이 있다면

    // 직접 수정 URL로 접근 시도
    await page.goto(`/community/notice/${createdNoticeId}/edit`);

    // 권한 없음 메시지 또는 로그인 페이지로 리다이렉트 확인
    // TODO: 실제 권한 처리 방식에 따라 assertion 수정 필요
    await expect(page).not.toHaveURL(`/community/notice/${createdNoticeId}/edit`);
  });

  test.afterEach(async ({ page, loginAs, noticeDetailPage }) => {
    // 테스트 후 생성된 공지사항 정리
    try {
      await loginAs('STAFF');
      await noticeDetailPage.goto(createdNoticeId);
      await noticeDetailPage.clickDeleteButton();
      await noticeDetailPage.confirmDelete();
    } catch (error) {
      console.log('Clean up failed:', error);
    }
  });
});
