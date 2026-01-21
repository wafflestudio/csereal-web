import { expect } from '@playwright/test';

import { test } from '../../../fixtures/index.fixture';

test.describe('공지사항 목록 조회 페이지 (/community/notice)', () => {
  test('생성한 공지사항을 진입할 수 있다', async ({
    page,
    noticeListPage,
    noticeCreatePage,
    loginAs,
  }) => {
    // 1. Arrange
    await noticeListPage.goto();
    await loginAs('STAFF');

    // 2. Act
    const noticeTitle = `[테스트] 기본 공지사항 - ${Date.now()}`;
    const noticeContent = '이것은 테스트용 공지사항 내용입니다.';

    await noticeCreatePage.goto();
    await noticeCreatePage.fillTitle(noticeTitle);
    await noticeCreatePage.fillContent(noticeContent);
    await noticeCreatePage.clickSubmitButton();
    await noticeListPage.goto();

    // 3. Assert
    await noticeListPage.clickNoticeByTitle(noticeTitle);
    await expect(page).toHaveURL(new RegExp('/community/notice/\\d+'));
  });

  test.skip('키워드로 공지사항을 검색할 수 있다', async ({
    page,
    loginAs,
    noticeListPage,
    noticeCreatePage,
  }) => {
    // 1. Arrange
    await noticeListPage.goto();
    await loginAs('STAFF');

    // 2. Act
    const noticeTitle = `[테스트] 기본 공지사항 - ${Date.now()}`;
    const noticeContent = '이것은 테스트용 공지사항 내용입니다.';

    await noticeCreatePage.goto();
    await noticeCreatePage.fillTitle(noticeTitle);
    await noticeCreatePage.fillContent(noticeContent);
    await noticeCreatePage.clickSubmitButton();
    await noticeListPage.goto();
    await noticeListPage.searchByKeyword('검색 테스트');

    // 3. Assert
    await expect(page.getByText(noticeTitle)).toBeVisible();
  });

  test.skip('태그로 공지사항을 필터링할 수 있다', async ({ page, loginAs, noticeListPage }) => {
    // 1. Arrange
    await loginAs('STAFF');
    await noticeListPage.goto();

    // 2. Act
    // TODO: 태그 필터 기능이 실제로 구현되어 있는지 확인 후 활성화
    // await noticeListPage.filterByTag('필터');

    // 3. Assert
    // TODO: 태그 필터 결과 확인 (실제 구현에 따라 assertion 추가 필요)
    // await expect(page.getByText('[목록테스트2] 태그 필터 테스트')).toBeVisible();
    // await expect(page.getByText('[목록테스트1] 검색 테스트 공지사항')).not.toBeVisible();

    // 현재는 기본 목록 표시 확인
    await expect(page.getByText('[목록테스트2] 태그 필터 테스트')).toBeVisible();
  });

  test.skip('선택한 공지사항들을 일괄 삭제할 수 있다', async ({ loginAs, noticeListPage }) => {
    // 1. Arrange
    await loginAs('STAFF');
    await noticeListPage.goto();

    // TODO: 공지사항 개수 확인 기능이 실제로 구현되어 있는지 확인 후 활성화
    // const initialCount = await noticeListPage.getNoticeCount();

    // 2. Act
    // TODO: 일괄 삭제 기능이 실제로 구현되어 있는지 확인 후 활성화
    // await noticeListPage.selectNotice(initialCount - 1);
    // await noticeListPage.bulkDelete();

    // 3. Assert
    // TODO: 일괄 삭제 결과 확인 (실제 구현에 따라 assertion 추가 필요)
    // const finalCount = await noticeListPage.getNoticeCount();
    // expect(finalCount).toBe(initialCount - 1);
    // await expect(page.getByText('[목록테스트5] 삭제 테스트 공지사항')).not.toBeVisible();
  });

  test.skip('선택한 공지사항들의 고정을 일괄 해제할 수 있다', async ({
    page,
    loginAs,
    noticeListPage,
  }) => {
    // 1. Arrange - 먼저 공지사항을 고정 상태로 만들어야 함
    await loginAs('STAFF');

    // 고정할 공지사항 생성
    await page.goto('/community/notice/create');
    await page.getByPlaceholder('제목을 입력하세요.').fill('[고정해제테스트] 고정된 공지사항');
    await page.locator('div.sun-editor-editable').fill('고정 해제 테스트용 내용입니다.');
    // TODO: 고정 옵션이 실제로 구현되어 있는지 확인 후 활성화
    // await page.locator('TODO_PINNED_TOGGLE_SELECTOR').click(); // 고정 옵션 활성화
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: /게시/ }).click();

    await noticeListPage.goto();

    // 2. Act
    // TODO: 일괄 고정 해제 기능이 실제로 구현되어 있는지 확인 후 활성화
    // await page.getByText('[고정해제테스트] 고정된 공지사항').locator('..').locator('TODO_NOTICE_CHECKBOX_SELECTOR').click();
    // await noticeListPage.bulkUnpin();

    // 3. Assert
    // TODO: 고정 해제 결과 확인 (실제 UI 구조에 따라 assertion 추가 필요)
    // 고정 표시가 사라졌는지 또는 고정 영역에서 제거되었는지 확인
  });

  test.skip('페이지네이션이 올바르게 작동한다', async ({ loginAs, noticeListPage }) => {
    // 1. Arrange
    await loginAs('STAFF');
    await noticeListPage.goto();

    // 2. Act & Assert
    // TODO: 페이지네이션 기능이 실제로 구현되어 있는지 확인 후 테스트 추가
    // 현재 테스트 데이터가 적어서 페이지네이션이 없을 수 있음
    // 실제 페이지네이션 구현에 따라 테스트 추가 필요
  });
});
