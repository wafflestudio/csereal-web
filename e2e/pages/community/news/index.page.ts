import type { Locator, Page } from '@playwright/test';

export class NeswPage {
  readonly page: Page;
  readonly newPostButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newPostButton = page.getByRole('button', { name: '새 게시글' });
  }

  async goto() {
    await this.page.goto('/community/news');
  }

  async clickNewPostButton() {
    await this.newPostButton.click();
  }
}
