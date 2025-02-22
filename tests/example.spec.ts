import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/서울대학교 컴퓨터공학부/);
});

test('실패하는 테스트', async ({ page }) => {
  await page.goto('/');
  expect(1).toBe(2);
});
