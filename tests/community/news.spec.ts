import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/community/news');
  await expect(page).toHaveTitle(/새 소식/);
});
