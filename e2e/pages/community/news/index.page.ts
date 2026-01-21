import type { Locator, Page } from '@playwright/test';

export const TAGS = [
  '행사',
  '연구',
  '수상',
  '채용',
  '칼럼',
  '강연',
  '교육',
  '인터뷰',
  '진로',
  '과거 미분류',
];

export class NewsPage {
  readonly page: Page;
  readonly newPostButton: Locator;
  readonly tagFilterBox: Locator;
  readonly selectedTags: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newPostButton = page.getByRole('button', { name: '새 게시글' });
    this.tagFilterBox = page.locator('#tag-filter');
    this.selectedTags = page.locator('#selected-tags');
  }

  async goto() {
    await this.page.goto('/community/news');
  }

  async clickNewPostButton() {
    await this.newPostButton.click();
  }

  async clickTag(tagName: string) {
    await this.tagFilterBox.locator(`label[for="${tagName}"]`).click();
  }

  // To click the close button of the selected tag. (It shows as 'X' in the UI)
  async removeTag(tagName: string) {
    await this.selectedTags.locator(`span:has-text("${tagName}") button`).click();
  }

  async resetTags() {
    await this.selectedTags.locator('button:has-text("태그 초기화")').click();
  }
}
