import type { Locator, Page } from '@playwright/test';

export class SeminarCreatePage {
  readonly page: Page;
  readonly titleInput: Locator;
  readonly locationInput: Locator;
  readonly nameInput: Locator;
  readonly affiliationInput: Locator;
  readonly startDateInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleInput = page.getByPlaceholder('제목을 입력하세요.');
    this.locationInput = page.getByPlaceholder('장소를 입력하세요.');
    this.nameInput = page.getByLabel('이름');
    this.affiliationInput = page.getByLabel('소속');
    this.startDateInput = page.getByText(/^\d{4}년 \d{1,2}월 \d{1,2}일/); // "2025년 8월 20일 수요일"
    this.submitButton = page.getByRole('button', { name: '저장하기' });
  }

  async goto() {
    await this.page.goto('/community/seminar/create');
  }

  async fillTitle(title: string) {
    await this.titleInput.fill(title);
  }

  async fillLocation(location: string) {
    await this.locationInput.fill(location);
  }

  async fillName(name: string) {
    await this.nameInput.fill(name);
  }

  async fillAffiliation(affiliation: string) {
    await this.affiliationInput.fill(affiliation);
  }

  async selectStartDate(day: string, hour: string, minute: string) {
    await this.startDateInput.click(); // 날짜 선택 모달 열기
    await this.page.getByRole('button', { name: day }).click(); // 예: '20'
    await this.page.getByText(`${hour}시`).click();             // 예: '14시'
    await this.page.getByText(`${minute}분`).click();           // 예: '30분'
  }

  async clickSubmitButton() {
    await this.submitButton.click();
  }
}
