import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/community/notice');
  await expect(page).toHaveTitle(/공지사항/);
});
