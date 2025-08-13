import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test("@test test1", async ({ page }) => {
   await page.goto("https://example.com");
  });

  test("test2", async ({ page }) => {
    await page.goto("https://practice.cydeo.com");
  });

  test("test3", async ({ page }) => {
   await page.goto("https://google.com");
  });
});