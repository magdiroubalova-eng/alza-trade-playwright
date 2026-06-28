import { test as base, expect } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.goto('https://trade.alza.cz/');
    await page.locator('[data-tid="banner-demo"]').click();
    await expect(page).toHaveURL(/.*dashboard/);
    await use(page);
  },
});

export { expect } from '@playwright/test';
