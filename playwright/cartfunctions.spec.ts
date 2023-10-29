import test from '@playwright/test';

test('test cart functionality', async ({ page }) => {
  await page.goto('http://localhost:3000');
});
