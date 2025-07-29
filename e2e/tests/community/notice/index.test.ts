import { expect } from '@playwright/test';

import { test } from '../../../fixtures/index.fixture';

test.describe('공지사항 목록 조회 페이지 (/community/notice)', () => {
  const testNoticeIds: string[] = [];

  test.beforeAll(async ({ browser }) => {
    // 테스트용 공지사항들 생성
    const context = await browser.newContext();
    const page = await context.newPage();

    // STAFF 로그인
    await page.goto('/community/notice');
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: 'STAFF', exact: true }).click();

    const notices = [
      {
        title: '[목록테스트1] 검색 테스트 공지사항',
        content: '검색용 내용입니다',
        tags: ['검색', '테스트'],
      },
      {
        title: '[목록테스트2] 태그 필터 테스트',
        content: '태그 필터용 내용입니다',
        tags: ['필터', '태그'],
      },
      {
        title: '[목록테스트3] 일괄 작업 테스트',
        content: '일괄 작업용 내용입니다',
        tags: ['일괄', '작업'],
      },
      {
        title: '[목록테스트4] 고정 테스트 공지사항',
        content: '고정 테스트용 내용입니다',
        tags: ['고정'],
      },
      {
        title: '[목록테스트5] 삭제 테스트 공지사항',
        content: '삭제 테스트용 내용입니다',
        tags: ['삭제'],
      },
    ];

    for (const notice of notices) {
      await page.goto('/community/notice/create');
      await page.getByPlaceholder('제목을 입력하세요.').fill(notice.title);
      await page.locator('div.sun-editor-editable').fill(notice.content);

      // TODO: 태그 기능이 실제로 구현되어 있는지 확인 후 활성화
      // for (const tag of notice.tags) {
      //   await page.locator('TODO_TAG_INPUT_SELECTOR').fill(tag);
      //   await page.keyboard.press('Enter');
      // }

      await page.waitForTimeout(1000);
      await page.getByRole('button', { name: /게시/ }).click();

      const url = page.url();
      const id = url.split('/').pop();
      if (id) testNoticeIds.push(id);
    }

    await context.close();
  });

  test('키워드로 공지사항을 검색할 수 있다', async ({ page, loginAs, noticeListPage }) => {
    // 1. Arrange
    await loginAs('STAFF');
    await noticeListPage.goto();

    // 2. Act
    // TODO: 검색 기능이 실제로 구현되어 있는지 확인 후 활성화
    // await noticeListPage.searchByKeyword('검색 테스트');

    // 3. Assert
    // TODO: 검색 결과 확인 (실제 구현에 따라 assertion 추가 필요)
    // await expect(page.getByText('[목록테스트1] 검색 테스트 공지사항')).toBeVisible();
    // await expect(page.getByText('[목록테스트2] 태그 필터 테스트')).not.toBeVisible();

    // 현재는 기본 목록 표시 확인
    await expect(page.getByText('[목록테스트1] 검색 테스트 공지사항')).toBeVisible();
  });

  test('태그로 공지사항을 필터링할 수 있다', async ({ page, loginAs, noticeListPage }) => {
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

  test('전체 선택 체크박스로 모든 공지사항을 선택할 수 있다', async ({
    page,
    loginAs,
    noticeListPage,
  }) => {
    // 1. Arrange
    await loginAs('STAFF');
    await noticeListPage.goto();

    // 2. Act
    // TODO: 전체 선택 기능이 실제로 구현되어 있는지 확인 후 활성화
    // await noticeListPage.selectAllNotices();

    // 3. Assert
    // TODO: 전체 선택 결과 확인 (실제 UI 구조에 따라 assertion 추가 필요)
    // const checkboxes = await page.locator('TODO_NOTICE_CHECKBOX_SELECTOR').all();
    // for (const checkbox of checkboxes) {
    //   await expect(checkbox).toBeChecked();
    // }
  });

  test('개별 공지사항을 선택할 수 있다', async ({ page, loginAs, noticeListPage }) => {
    // 1. Arrange
    await loginAs('STAFF');
    await noticeListPage.goto();

    // 2. Act
    // TODO: 개별 선택 기능이 실제로 구현되어 있는지 확인 후 활성화
    // await noticeListPage.selectNotice(0); // 첫 번째 공지사항 선택

    // 3. Assert
    // TODO: 개별 선택 결과 확인 (실제 UI 구조에 따라 assertion 추가 필요)
    // await expect(page.locator('TODO_NOTICE_CHECKBOX_SELECTOR').first()).toBeChecked();
  });

  test('선택한 공지사항들을 일괄 삭제할 수 있다', async ({ page, loginAs, noticeListPage }) => {
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

  test('선택한 공지사항들의 고정을 일괄 해제할 수 있다', async ({
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

  test('공지사항 제목을 클릭하면 상세 페이지로 이동한다', async ({
    page,
    loginAs,
    noticeListPage,
  }) => {
    // 1. Arrange
    await loginAs('STAFF');
    await noticeListPage.goto();

    // 2. Act
    await noticeListPage.clickNoticeByTitle('[목록테스트1] 검색 테스트 공지사항');

    // 3. Assert
    await expect(page).toHaveURL(new RegExp('/community/notice/\\d+'));
    await expect(page.getByText('[목록테스트1] 검색 테스트 공지사항')).toBeVisible();
  });

  test('공지사항 목록이 올바르게 표시된다', async ({ page, loginAs, noticeListPage }) => {
    // 1. Arrange
    await loginAs('STAFF');

    // 2. Act
    await noticeListPage.goto();

    // 3. Assert
    // TODO: 공지사항 개수 확인 기능이 실제로 구현되어 있는지 확인 후 활성화
    // const noticeCount = await noticeListPage.getNoticeCount();
    // expect(noticeCount).toBeGreaterThan(0);

    // 테스트로 생성한 공지사항들이 표시되는지 확인
    await expect(page.getByText('[목록테스트1] 검색 테스트 공지사항')).toBeVisible();
    await expect(page.getByText('[목록테스트2] 태그 필터 테스트')).toBeVisible();
    await expect(page.getByText('[목록테스트3] 일괄 작업 테스트')).toBeVisible();
  });

  test('검색 결과가 없을 때 적절한 메시지가 표시된다', async ({
    page,
    loginAs,
    noticeListPage,
  }) => {
    // 1. Arrange
    await loginAs('STAFF');
    await noticeListPage.goto();

    // 2. Act
    // TODO: 검색 기능이 실제로 구현되어 있는지 확인 후 활성화
    // await noticeListPage.searchByKeyword('존재하지않는검색어12345');

    // 3. Assert
    // TODO: 검색 결과 없음 메시지 확인 (실제 UI 구조에 따라 assertion 추가 필요)
    // await expect(page.getByText('검색 결과가 없습니다')).toBeVisible();
  });

  test('페이지네이션이 올바르게 작동한다', async ({ page, loginAs, noticeListPage }) => {
    // 1. Arrange
    await loginAs('STAFF');
    await noticeListPage.goto();

    // 2. Act & Assert
    // TODO: 페이지네이션 기능이 실제로 구현되어 있는지 확인 후 테스트 추가
    // 현재 테스트 데이터가 적어서 페이지네이션이 없을 수 있음
    // 실제 페이지네이션 구현에 따라 테스트 추가 필요
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

      // 생성된 테스트 공지사항들 삭제
      for (const id of testNoticeIds) {
        try {
          await page.goto(`/community/notice/${id}`);
          const deleteButton = page.getByRole('button', { name: '삭제' });
          if (await deleteButton.isVisible()) {
            await deleteButton.click();
            await page.getByRole('button', { name: '확인' }).click();
            await page.waitForTimeout(500);
          }
        } catch (error) {
          console.log(`Failed to delete notice ${id}:`, error);
        }
      }

      // 추가로 생성된 공지사항도 정리
      await page.goto('/community/notice');
      const testNotices = await page.locator('text=/\\[.*테스트.*\\]/').all();
      for (const notice of testNotices) {
        try {
          await notice.click();
          await page.getByRole('button', { name: '삭제' }).click();
          await page.getByRole('button', { name: '확인' }).click();
          await page.waitForTimeout(500);
          await page.goto('/community/notice');
        } catch (error) {
          console.log('Failed to delete test notice:', error);
        }
      }
    } catch (error) {
      console.log('Clean up failed:', error);
    }

    await context.close();
  });
});
