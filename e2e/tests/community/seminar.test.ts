import { expect } from '@playwright/test';
import { test } from '../../fixtures';

test.describe('Seminar', () => {
  test('should allow STAFF to create a seminar post with required fields', async ({
    page,
    loginAs,
    seminarPage,
    seminarCreatePage,
  }) => {
    // 로그인
    await loginAs('STAFF');

    // 세미나 페이지 이동 → 새 게시글 클릭
    await seminarPage.goto();
    await seminarPage.clickNewPostButton();

    // 데이터 입력
    const title = `[E2E] 테스트 세미나 ${Date.now()}`;
    await seminarCreatePage.fillTitle(title);
    await seminarCreatePage.fillLocation('서울대학교 301동');
    await seminarCreatePage.fillName('홍길동');
    await seminarCreatePage.fillAffiliation('서울대학교 컴퓨터공학부');
    await seminarCreatePage.selectStartDate('20', '14', '30'); // 20일 14시 30분

    // 제출
    await seminarCreatePage.clickSubmitButton();

    // 결과 확인
    await expect(page.getByText(title)).toBeVisible();
  });
});
