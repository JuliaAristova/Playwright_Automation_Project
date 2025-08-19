import { test, expect } from "@playwright/test";

test("Checkboxes test", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const mondayCheckbox = page.locator("#monday");

  // Get all checkbox locators
  const daysCheckboxes = await page.locator("//label[@for='days']/../div/input").all();

  //check on checkbox, verify it is checked
  expect(await mondayCheckbox.isChecked()).toBeFalsy();
  mondayCheckbox.check();
  await expect(mondayCheckbox).toBeChecked();

  //uncheck and verify
  mondayCheckbox.uncheck();
  await expect(mondayCheckbox).not.toBeChecked();

  // Loop through and check each one
  for (const box of daysCheckboxes) {
    await box.check({ force: true }); // force in case it's hidden or offscreen
    await expect(box).toBeChecked(); // assertion to verify it's checked
  }

  //await page.waitForTimeout(3000);
});
