import { type Locator, type Page } from '@playwright/test';

export class NoticeEditPage {
  readonly page: Page;
  readonly titleInput: Locator;
  readonly contentEditor: Locator;
  readonly tagInput: Locator;
  readonly attachmentInput: Locator;
  readonly importantToggle: Locator;
  readonly privateToggle: Locator;
  readonly pinnedToggle: Locator;
  readonly mainDisplayToggle: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleInput = page.getByPlaceholder('제목을 입력하세요.');
    this.contentEditor = page.locator('div.sun-editor-editable');
    this.tagInput = page.locator('TODO_TAG_INPUT_SELECTOR'); // TODO: 실제 태그 입력 필드 selector 확인 필요
    this.attachmentInput = page.locator('input[type="file"]');
    this.importantToggle = page.locator('TODO_IMPORTANT_TOGGLE_SELECTOR'); // TODO: 중요 안내 토글 selector 확인 필요
    this.privateToggle = page.locator('TODO_PRIVATE_TOGGLE_SELECTOR'); // TODO: 비공개 토글 selector 확인 필요
    this.pinnedToggle = page.locator('TODO_PINNED_TOGGLE_SELECTOR'); // TODO: 상단고정 토글 selector 확인 필요
    this.mainDisplayToggle = page.locator('TODO_MAIN_DISPLAY_TOGGLE_SELECTOR'); // TODO: 메인표시 토글 selector 확인 필요
    this.submitButton = page.getByRole('button', { name: /수정/ });
  }

  async goto(id: string) {
    await this.page.goto(`/community/notice/${id}/edit`);
  }

  async fillTitle(title: string) {
    await this.titleInput.fill(title);
  }

  async fillContent(content: string) {
    await this.contentEditor.fill(content);
  }

  async addTag(tag: string) {
    await this.tagInput.fill(tag);
    await this.page.keyboard.press('Enter');
  }

  async uploadAttachment(filePath: string) {
    await this.attachmentInput.setInputFiles(filePath);
  }

  async toggleImportant() {
    await this.importantToggle.click();
  }

  async togglePrivate() {
    await this.privateToggle.click();
  }

  async togglePinned() {
    await this.pinnedToggle.click();
  }

  async toggleMainDisplay() {
    await this.mainDisplayToggle.click();
  }

  async clickSubmitButton() {
    await this.submitButton.click();
  }
}
