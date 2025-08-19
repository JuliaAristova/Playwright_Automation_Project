import { test, expect } from "@playwright/test";

test("Input box validation test", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  /*
  Input values are not part of the DOM text, so .
  toHaveValue() is the correct assertion.
  toBeEmpty() - checks DOM elements or editable elements
  toHaveText() checks visible text content (DOM elements)
  toHaveText("")
  */

  const inputBox1 = page.locator("#input1");

  await expect(inputBox1).toBeVisible();
  await expect(inputBox1).toBeEnabled();
  await expect(inputBox1).toBeEmpty();
  await expect(inputBox1).toBeEditable();
  await inputBox1.fill("Julia");

  //await page.waitForTimeout(3000);

  await expect(inputBox1).toHaveValue("Julia");
});
