import { type Locator, type Page } from '@playwright/test';

export class NoticeListPage {
  readonly page: Page;
  readonly newPostButton: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly tagButtons: Locator;
  readonly selectAllCheckbox: Locator;
  readonly noticeCheckboxes: Locator;
  readonly bulkDeleteButton: Locator;
  readonly bulkUnpinButton: Locator;
  readonly noticeItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newPostButton = page.getByRole('button', { name: '새 게시글' });
    this.searchInput = page.locator('TODO_SEARCH_INPUT_SELECTOR'); // TODO: 검색 입력 필드 selector 확인 필요
    this.searchButton = page.getByRole('button', { name: '검색' });
    this.tagButtons = page.locator('TODO_TAG_FILTER_BUTTONS_SELECTOR'); // TODO: 태그 필터 버튼들 selector 확인 필요
    this.selectAllCheckbox = page.locator('TODO_SELECT_ALL_CHECKBOX_SELECTOR'); // TODO: 전체 선택 체크박스 selector 확인 필요
    this.noticeCheckboxes = page.locator('TODO_NOTICE_CHECKBOX_SELECTOR'); // TODO: 개별 공지사항 체크박스 selector 확인 필요
    this.bulkDeleteButton = page.locator('TODO_BULK_DELETE_BUTTON_SELECTOR'); // TODO: 일괄 삭제 버튼 selector 확인 필요
    this.bulkUnpinButton = page.locator('TODO_BULK_UNPIN_BUTTON_SELECTOR'); // TODO: 일괄 고정해제 버튼 selector 확인 필요
    this.noticeItems = page.locator('TODO_NOTICE_ITEM_SELECTOR'); // TODO: 공지사항 목록 아이템 selector 확인 필요
  }

  async goto() {
    await this.page.goto('/community/notice');
  }

  async clickNewPostButton() {
    await this.newPostButton.click();
  }

  async searchByKeyword(keyword: string) {
    await this.searchInput.fill(keyword);
    await this.searchButton.click();
  }

  async filterByTag(tagName: string) {
    await this.tagButtons.filter({ hasText: tagName }).click();
  }

  async selectAllNotices() {
    await this.selectAllCheckbox.click();
  }

  async selectNotice(index: number) {
    await this.noticeCheckboxes.nth(index).click();
  }

  async bulkDelete() {
    await this.bulkDeleteButton.click();
    // 확인 모달에서 확인 버튼 클릭
    await this.page.getByRole('button', { name: '확인' }).click();
  }

  async bulkUnpin() {
    await this.bulkUnpinButton.click();
    // 확인 모달에서 확인 버튼 클릭
    await this.page.getByRole('button', { name: '확인' }).click();
  }

  async getNoticeCount(): Promise<number> {
    return await this.noticeItems.count();
  }

  async clickNoticeByTitle(title: string) {
    await this.page.getByText(title).click();
  }
}
