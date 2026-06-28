import { test, expect } from './fixtures';

test('seed', async ({ page }) => {
  await expect(page).toHaveURL(/.*dashboard/);
});