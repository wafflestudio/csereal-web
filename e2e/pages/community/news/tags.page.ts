import type { Page } from '@playwright/test';

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

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/community/news');
  }

  async clickTag(tagName: string) {
    await this.page.click(`label[for="${tagName}"]`);
  }

  // To click the close button of the selected tag. (It shows as 'X' in the UI)
  async removeTag(tagName: string) {
    await this.page.click(`span:has-text("${tagName}") button`);
  }

  async resetTags() {
    await this.page.click('button:has-text("태그 초기화")');
  }
}
