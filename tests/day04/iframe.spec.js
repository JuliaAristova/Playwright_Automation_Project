import { test, expect } from "@playwright/test";

test.only("iframe test", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/iframe");
  let myFrame = page.frameLocator("//iframe[@id='mce_0_ifr']");
  let elementInsideFrame = myFrame.locator("//body[@id='tinymce']");
  await page.waitForTimeout(3000);
  await elementInsideFrame.clear();
  //second way to clear the text if clear() method doesn't work
  //await elementInsideFrame.press("Control+A", "Backspace");
  await elementInsideFrame.fill("Hello, Playwright!");
  await page.waitForTimeout(3000);
  await expect(elementInsideFrame).toHaveText("Hello, Playwright!");
});
