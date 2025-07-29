// TODO: eslint 문제 이 파일을 제외함으로서 예쁘게 해결하기
/* eslint-disable react-hooks/rules-of-hooks */

import { test as base } from '@playwright/test';

export type Role = 'STAFF' | 'RESERV' | 'COUNCIL';

type RoleFixtures = {
  loginAs: (role: Role) => Promise<void>;
};

export const test = base.extend<RoleFixtures>({
  loginAs: async ({ page }, use) => {
    const login = async (role: Role) => {
      await page.waitForLoadState('networkidle');
      await page.getByRole('button', { name: role, exact: true }).click();
    };
    await use(login);
  },
});
