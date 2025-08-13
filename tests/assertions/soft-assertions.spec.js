import {test, expect} from "@playwright/test"

test('Soft assertions test', async({page}) => {

    await page.goto("https://www.demoblaze.com/index.html");

    //soft assertions
    await expect.soft(page).toHaveTitle('STORE');
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/index.html");
    await expect.soft(page.locator("a.navbar-brand")).toBeVisible();


});