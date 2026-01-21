import { type Locator, type Page } from '@playwright/test';

export class NoticeDetailPage {
  readonly page: Page;
  readonly title: Locator;
  readonly content: Locator;
  readonly editButton: Locator;
  readonly deleteButton: Locator;
  readonly listButton: Locator;
  readonly prevButton: Locator;
  readonly nextButton: Locator;
  readonly attachments: Locator;
  readonly tags: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('TODO_NOTICE_TITLE_SELECTOR'); // TODO: 공지사항 제목 영역 selector 확인 필요
    this.content = page.locator('TODO_NOTICE_CONTENT_SELECTOR'); // TODO: 공지사항 내용 영역 selector 확인 필요
    this.editButton = page.getByRole('button', { name: '편집' });
    this.deleteButton = page.getByRole('button', { name: '삭제' });
    this.listButton = page.getByRole('button', { name: '목록' });
    this.prevButton = page.locator('TODO_PREV_BUTTON_SELECTOR'); // TODO: 이전글 버튼 selector 확인 필요
    this.nextButton = page.locator('TODO_NEXT_BUTTON_SELECTOR'); // TODO: 다음글 버튼 selector 확인 필요
    this.attachments = page.locator('TODO_ATTACHMENTS_SECTION_SELECTOR'); // TODO: 첨부파일 영역 selector 확인 필요
    this.tags = page.locator('TODO_TAGS_SECTION_SELECTOR'); // TODO: 태그 영역 selector 확인 필요
  }

  async goto(id: string) {
    await this.page.goto(`/community/notice/${id}`);
  }

  async clickEditButton() {
    await this.editButton.click();
  }

  async clickDeleteButton() {
    await this.deleteButton.click();
  }

  async confirmDelete() {
    // 삭제 확인 모달에서 확인 버튼 클릭
    await this.page.getByRole('button', { name: '확인' }).click();
  }

  async clickListButton() {
    await this.listButton.click();
  }

  async clickPrevButton() {
    await this.prevButton.click();
  }

  async clickNextButton() {
    await this.nextButton.click();
  }

  async getTitle(): Promise<string> {
    return (await this.title.textContent()) || '';
  }

  async getContent(): Promise<string> {
    return (await this.content.textContent()) || '';
  }

  async getTags(): Promise<string[]> {
    const tagElements = await this.tags.locator('TODO_TAG_ITEM_SELECTOR').all(); // TODO: 개별 태그 item selector 확인 필요
    const tags = [];
    for (const tag of tagElements) {
      const text = await tag.textContent();
      if (text) tags.push(text);
    }
    return tags;
  }
}
