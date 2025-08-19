import { test, expect } from "@playwright/test";

test("Bootstrap dropdown test", async ({ page }) => {
  await page.goto(
    "https://mdbootstrap.com/docs/standard/extended/dropdown-checkbox/"
  );

  // Wait for the cookie popup to appear
  await page.locator("#accept_cookies_modal").waitFor();

  // Click the "Accept" button
  await page.click("#accept_cookies_btn");

  const dropdown = page.locator("#dropdownMenuButton");
  await dropdown.click();

  let options = page.locator("//div[@class='dropdown']//input");

  await expect(options).toHaveCount(4);

  const labels = await page.locator("//div[@class='dropdown']//label").all();

  for (let label of labels) {
    const value = await label.textContent();
    console.log("Label: ", value);
  }
});
