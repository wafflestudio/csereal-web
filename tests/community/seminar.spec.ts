import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/community/seminar');
  await expect(page).toHaveTitle(/세미나/);
});
