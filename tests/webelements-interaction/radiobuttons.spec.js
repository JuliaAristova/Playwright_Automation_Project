import { test, expect } from "@playwright/test";

test("Radiobutton test", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const radioMale = page.locator("#male");
  const radioFemale = page.locator("#female");
  expect(await radioMale.isChecked()).toBeFalsy();

  await expect(radioMale).not.toBeChecked();
  await expect(radioFemale).not.toBeChecked();

  await radioMale.check();
  await expect(radioMale).toBeChecked();
  await expect(radioFemale).not.toBeChecked();

  await radioFemale.check();
  await expect(radioMale).not.toBeChecked();
  expect(await radioFemale.isChecked()).toBeTruthy();
});
