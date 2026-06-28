import { test, expect } from './fixtures';

test.describe('Orders', () => {
  test('View and filter orders with a valid filter', async ({ page }) => {
    await page.locator('a:has-text("Objednávky")').click();
    await expect(page).toHaveURL(/\/orders/);

    await page.locator('#searchTexts').fill('1250975501');
    await page.locator('[data-tid="btnSearch"]').click();

    await expect(page.getByText('Počet záznamů 1')).toBeVisible();
    await expect(
      page.locator('cms-loading-panel').getByText('1250975501', { exact: true })
    ).toBeVisible();
  });
});