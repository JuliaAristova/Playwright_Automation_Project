import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {
  //declaring on group level - can be accessed by each test case
  let liElements;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    //initilizing after navigation to the page
    liElements = await page.locator("//ul[@class='list-group']/li/a").all();
  });

  test("Verify there are 50 links within <ul> tag", async ({ page }) => {
    expect(liElements.length).toBe(50);
  });

  test("Verify all links inside <ul> tag is visible and clickable ", async ({
    page,
  }) => {
    for (let elem of liElements) {
      await expect(elem).toBeVisible();
      //expect(await elem.isVisible()).toBeTruthy();
      await expect(elem).toBeEnabled();
      //expect(await elem.isEnabled()).toBeTruthy();
    }
  });

  test("Verify all links inside <ul> tag has href attribute", async ({ page }) => {
    for (let elem of liElements) {
      await expect(elem).toHaveAttribute("href");
      console.log(await elem.getAttribute("href"));
    }
  });
});

