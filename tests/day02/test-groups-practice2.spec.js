import { test } from "@playwright/test";

//tag added to run test with tag '@test' from package.json

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


