import { expect } from '@playwright/test';

import { test } from '../../fixtures';
import { TAGS } from '../../pages/community/news/index.page';

test.describe('News', () => {
  test('should allow STAFF to create a new news post with tags', async ({
    page,
    loginAs,
    newsPage,
    newsCreatePage,
  }) => {
    // 1. Arrange
    await newsPage.goto();
    const newsTitle = `[Test] New News - ${Date.now()}`;
    const newsContent = 'This is a test news content.';
    const selectedTagsBox = page.locator('.flex.flex-wrap.items-center.gap-2\\.5.mt-3.ml-6');
    await loginAs('STAFF');

    // 2. Act
    await newsPage.clickNewPostButton();
    await expect(page).toHaveURL('/community/news/create');
    await newsCreatePage.fillTitle(newsTitle);
    await newsCreatePage.fillContent(newsContent);

    // 태그 선택
    await newsCreatePage.page.click(`label[for="${TAGS[0]}"]`);
    await newsCreatePage.page.click(`label[for="${TAGS[1]}"]`);

    await page.waitForTimeout(1000);
    await newsCreatePage.clickSubmitButton();

    // 3. Assert
    await expect(page.getByText(newsTitle).first()).toBeVisible();
    await expect(selectedTagsBox.getByText(TAGS[0])).toBeVisible();
    await expect(selectedTagsBox.getByText(TAGS[1])).toBeVisible();

    // To check the post is visible in the news list with selected tags
    await newsPage.goto();
    await newsPage.clickTag(TAGS[0]);
    await newsPage.clickTag(TAGS[1]);

    await expect(page.getByText(newsTitle)).toBeVisible();
  });

  test('should allow basic user to remove selected tags and reset all tags', async ({
    page,
    newsPage,
  }) => {
    await newsPage.goto();

    const selectedTagsBox = page.locator('#selected-tags');

    for (const tag of TAGS.slice(0, 3)) {
      await newsPage.clickTag(tag);
      await expect(selectedTagsBox.getByText(tag)).toBeVisible();
    }

    await newsPage.removeTag(TAGS[0]);
    await expect(selectedTagsBox.getByText(TAGS[0])).not.toBeVisible();

    await newsPage.resetTags();
    for (const tag of TAGS.slice(1, 3)) {
      await expect(selectedTagsBox.getByText(tag)).not.toBeVisible();
    }
  });
});
