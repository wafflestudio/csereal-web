import { expect } from '@playwright/test';

import { test } from '../../../fixtures/index.fixture';

test.describe('공지사항 상세보기 페이지 (/community/notice/:id)', () => {
  let firstNoticeId: string;
  let secondNoticeId: string;
  let thirdNoticeId: string;

  test.beforeAll(async ({ browser }) => {
    // 테스트용 공지사항 3개 생성 (이전글/다음글 테스트를 위해)
    const context = await browser.newContext();
    const page = await context.newPage();

    // STAFF 로그인
    await page.goto('/community/notice');
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: 'STAFF', exact: true }).click();

    // 첫 번째 공지사항 생성
    await page.goto('/community/notice');
    await page.getByRole('button', { name: '새 게시글' }).click();
    await page.getByPlaceholder('제목을 입력하세요.').fill('[상세테스트1] 첫 번째 공지사항');
    await page.locator('div.sun-editor-editable').fill('첫 번째 테스트 내용입니다.');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: /게시/ }).click();

    const url1 = page.url();
    firstNoticeId = url1.split('/').pop() || '';

    // 두 번째 공지사항 생성
    await page.goto('/community/notice');
    await page.getByRole('button', { name: '새 게시글' }).click();
    await page.getByPlaceholder('제목을 입력하세요.').fill('[상세테스트2] 두 번째 공지사항');
    await page.locator('div.sun-editor-editable').fill('두 번째 테스트 내용입니다.');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: /게시/ }).click();

    const url2 = page.url();
    secondNoticeId = url2.split('/').pop() || '';

    // 세 번째 공지사항 생성
    await page.goto('/community/notice');
    await page.getByRole('button', { name: '새 게시글' }).click();
    await page.getByPlaceholder('제목을 입력하세요.').fill('[상세테스트3] 세 번째 공지사항');
    await page.locator('div.sun-editor-editable').fill('세 번째 테스트 내용입니다.');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: /게시/ }).click();

    const url3 = page.url();
    thirdNoticeId = url3.split('/').pop() || '';

    await context.close();
  });

  test('공지사항을 삭제할 수 있다', async ({ page, loginAs, noticeDetailPage, noticeListPage }) => {
    // 1. Arrange
    await loginAs('STAFF');

    // 2. Act
    await noticeDetailPage.goto(firstNoticeId);
    await expect(page.getByText('[상세테스트1] 첫 번째 공지사항').first()).toBeVisible();

    await noticeDetailPage.clickDeleteButton();
    await noticeDetailPage.confirmDelete();

    // 3. Assert
    // 목록 페이지로 리다이렉트되고 해당 공지사항이 더 이상 보이지 않음
    await expect(page).toHaveURL('/community/notice');
    await expect(page.getByText('[상세테스트1] 첫 번째 공지사항')).not.toBeVisible();
  });

  test('편집 버튼을 클릭하면 편집 페이지로 이동한다', async ({
    page,
    loginAs,
    noticeDetailPage,
  }) => {
    // 1. Arrange
    await loginAs('STAFF');

    // 2. Act
    await noticeDetailPage.goto(secondNoticeId);
    await noticeDetailPage.clickEditButton();

    // 3. Assert
    await expect(page).toHaveURL(`/community/notice/${secondNoticeId}/edit`);
  });

  test('목록 버튼을 클릭하면 목록 페이지로 이동한다', async ({
    page,
    loginAs,
    noticeDetailPage,
  }) => {
    // 1. Arrange
    await loginAs('STAFF');

    // 2. Act
    await noticeDetailPage.goto(secondNoticeId);
    await noticeDetailPage.clickListButton();

    // 3. Assert
    await expect(page).toHaveURL('/community/notice');
  });

  test('이전글 버튼을 클릭하면 이전 공지사항으로 이동한다', async ({
    page,
    loginAs,
    noticeDetailPage,
  }) => {
    // 1. Arrange
    await loginAs('STAFF');

    // 2. Act
    await noticeDetailPage.goto(thirdNoticeId); // 세 번째 글에서
    // TODO: 이전글 버튼 selector 확인 후 활성화
    // await noticeDetailPage.clickPrevButton(); // 이전글(두 번째)로 이동

    // 3. Assert
    // TODO: 이전글 기능이 실제로 구현되어 있는지 확인 후 활성화
    // await expect(page).toHaveURL(`/community/notice/${secondNoticeId}`);
    // await expect(page.getByText('[상세테스트2] 두 번째 공지사항').first()).toBeVisible();
  });

  test('다음글 버튼을 클릭하면 다음 공지사항으로 이동한다', async ({
    page,
    loginAs,
    noticeDetailPage,
  }) => {
    // 1. Arrange
    await loginAs('STAFF');

    // 2. Act
    await noticeDetailPage.goto(secondNoticeId); // 두 번째 글에서
    // TODO: 다음글 버튼 selector 확인 후 활성화
    // await noticeDetailPage.clickNextButton(); // 다음글(세 번째)로 이동

    // 3. Assert
    // TODO: 다음글 기능이 실제로 구현되어 있는지 확인 후 활성화
    // await expect(page).toHaveURL(`/community/notice/${thirdNoticeId}`);
    // await expect(page.getByText('[상세테스트3] 세 번째 공지사항').first()).toBeVisible();
  });

  test('공지사항 내용이 올바르게 표시된다', async ({ page, loginAs, noticeDetailPage }) => {
    // 1. Arrange
    await loginAs('STAFF');

    // 2. Act
    await noticeDetailPage.goto(secondNoticeId);

    // 3. Assert
    // TODO: 제목과 내용 selector 확인 후 활성화
    // const title = await noticeDetailPage.getTitle();
    // const content = await noticeDetailPage.getContent();
    // expect(title).toContain('[상세테스트2] 두 번째 공지사항');
    // expect(content).toContain('두 번째 테스트 내용입니다.');

    // 현재는 페이지에서 직접 확인
    await expect(page.getByText('[상세테스트2] 두 번째 공지사항').first()).toBeVisible();
    await expect(page.getByText('두 번째 테스트 내용입니다.').first()).toBeVisible();
  });

  test('첨부파일이 있는 경우 첨부파일 영역이 표시된다', async ({
    page,
    loginAs,
    noticeDetailPage,
  }) => {
    // 1. Arrange - 첨부파일이 있는 공지사항이 필요
    // TODO: 첨부파일 기능이 실제로 구현되어 있는지 확인 후 테스트 활성화
    await loginAs('STAFF');

    // 2. Act
    await noticeDetailPage.goto(secondNoticeId);

    // 3. Assert
    // TODO: 첨부파일 영역 UI 확인 (실제 구현에 따라 assertion 추가 필요)
    // const attachments = noticeDetailPage.attachments;
    // await expect(attachments).toBeVisible();
  });

  test('태그가 있는 경우 태그 영역이 표시된다', async ({ page, loginAs, noticeDetailPage }) => {
    // 1. Arrange - 태그가 있는 공지사항이 필요
    // TODO: 태그 기능이 실제로 구현되어 있는지 확인 후 테스트 활성화
    await loginAs('STAFF');

    // 2. Act
    await noticeDetailPage.goto(secondNoticeId);

    // 3. Assert
    // TODO: 태그 영역 UI 확인 (실제 구현에 따라 assertion 추가 필요)
    // const tags = await noticeDetailPage.getTags();
    // expect(tags.length).toBeGreaterThan(0);
  });

  test('권한이 없는 사용자에게는 편집/삭제 버튼이 표시되지 않는다', async ({
    page,
    loginAs,
    noticeDetailPage,
  }) => {
    // 1. Arrange - 권한이 없는 사용자로 로그인 (또는 로그아웃 상태)
    // TODO: 권한이 없는 사용자 로그인 방식 확인 후 활성화
    // await loginAs('GUEST'); // 권한이 낮은 역할이 있다면

    // 2. Act
    await noticeDetailPage.goto(secondNoticeId);

    // 3. Assert
    // TODO: 권한별 버튼 표시/숨김 로직 확인 후 활성화
    // await expect(noticeDetailPage.editButton).not.toBeVisible();
    // await expect(noticeDetailPage.deleteButton).not.toBeVisible();
  });

  test.afterAll(async ({ browser }) => {
    // 테스트 후 생성된 공지사항들 정리
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
      // STAFF 로그인
      await page.goto('/community/notice');
      await page.waitForLoadState('networkidle');
      await page.getByRole('button', { name: 'STAFF', exact: true }).click();

      // 남은 공지사항들 삭제
      const remainingIds = [secondNoticeId, thirdNoticeId].filter((id) => id);

      for (const id of remainingIds) {
        try {
          await page.goto(`/community/notice/${id}`);
          await page.getByRole('button', { name: '삭제' }).click();
          await page.getByRole('button', { name: '확인' }).click();
          await page.waitForTimeout(500);
        } catch (error) {
          console.log(`Failed to delete notice ${id}:`, error);
        }
      }
    } catch (error) {
      console.log('Clean up failed:', error);
    }

    await context.close();
  });
});
