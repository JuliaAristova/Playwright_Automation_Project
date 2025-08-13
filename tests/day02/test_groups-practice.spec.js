import {test} from "@playwright/test";

test.describe("Practice Cydeo", () => {

test.beforeEach(async ({page}) => {
    await page.goto("https://practice.cydeo.com");

});

test.afterEach(async ({page}) => {
   await page.waitForTimeout(3000)
});
test("Verify page title", async ({page}) => {
    console.log(await page.title());
});

test("Verify page url", async ({page}) => {
    console.log(page.url());    
});
});