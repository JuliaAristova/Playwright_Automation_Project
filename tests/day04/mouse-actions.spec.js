import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
  });
  test("Left click", async ({ page }) => {
    //more convinient if you do not reuse this element
    await page.click("text=A/B Testing");
  });

  test("Right click", async ({ page }) => {
    await page.click("text=A/B Testing", { button: "right" });
  });

  test("Hover", async ({ page }) => {
    page.click("text=Hover");
    await page.waitForTimeout(3000);
    //hover over first image in the page
    //await page.hover("//img[@src='/img/avatar-blank.jpg']");
    // hover over all images in the page
    let images = await page
      .locator("//img[@src='/img/avatar-blank.jpg']")
      .all();
    for (let img of images) {
      await page.waitForTimeout(2000);
      await img.hover();
    }
  });

  test("Mouse wheel scrolling", async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.mouse.wheel(0, 4000); //0 - x-axis, 200 piksel - y-axis
  });

  test("Scrolling to specific element", async ({ page }) => {
    //playwright automatically scrolls to the element and can click it
    //if you want to scroll in manually in viewport
    let inputsLink = page.getByText("Inputs");
    await inputsLink.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await inputsLink.click();
  });

  test("Drag and Drop", async ({ page }) => {
    await page.click("text=Drag and Drop");
    await page.waitForTimeout(3000);
    //passing strings  
    await page.dragAndDrop("//div[@id='column-a']", "//div[@id='column-b']");

    await page.waitForTimeout(3000);

    //drag and drop using locators
    let source = page.locator("//div[@id='column-a']");
    let target = page.locator("//div[@id='column-b']");
    source.dragTo(target);
    

  });
});
