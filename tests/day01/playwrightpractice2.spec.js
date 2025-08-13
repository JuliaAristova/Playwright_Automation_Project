import {test, expect} from '@playwright/test';

test('open practice url', async({page}) => {
    await page.goto('https://practice.cydeo.com');
    await page.waitForTimeout(3000); 
    let pageTitle = await page.title();
    console.log(page.title);
    await expect(page).toHaveTitle('Practice')
});

test("@test - open practice url", async ({ page }) => {
  await page.goto("https://practice.cydeo.com");
  await page.waitForTimeout(3000);
  console.log(page.url());
  await expect(page).toHaveURL("https://practice.cydeo.com/");
});