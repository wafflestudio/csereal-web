import { type Locator, type Page } from '@playwright/test';

export class NoticeCreatePage {
  readonly page: Page;
  readonly titleInput: Locator;
  readonly contentEditor: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleInput = page.getByPlaceholder('제목을 입력하세요.');
    this.contentEditor = page.locator('div.sun-editor-editable');
    this.submitButton = page.getByRole('button', { name: /게시/ });
  }

  async goto() {
    await this.page.goto('/community/notice/create');
  }

  async fillTitle(title: string) {
    await this.titleInput.fill(title);
  }

  async fillContent(content: string) {
    await this.contentEditor.fill(content);
  }

  async clickSubmitButton() {
    await this.submitButton.click();
  }
}
