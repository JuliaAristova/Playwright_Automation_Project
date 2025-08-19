import { test, expect } from "@playwright/test";

test("Keyboard actions test", async ({ page }) => {
  await page.goto("https://text-compare.com/");

  let textarea1 = page.locator("//textarea[@name='text1']");
  let textarea2 = page.locator("//textarea[@name='text2']");

  await textarea1.fill("Welcome to automation");

  await page.waitForTimeout(2000);

  // Windows select - Ctrl A (Mac - Meta A)
  await page.keyboard.press("Control+A");
  await page.waitForTimeout(2000);

  //Windows copy - Ctrl C (Mac - Meta C)
  await page.keyboard.press("Control+C");

  // Tab - to move to the next focusable element
  await page.keyboard.down('Tab');
  await page.keyboard.up('Tab');

  // Windows paste - Ctrl V (Mac - Meta V)
  await page.keyboard.press("Control+V");
  await page.waitForTimeout(2000);

  await page.click("div.compareButtonText");
  await page.waitForTimeout(2000);

  let msg = page.getByText("The two texts are identical!");
  await expect(msg).toBeVisible();
});
