import {test} from '@playwright/test';

test('reading env variables', async ({page}) => {
  
    console.log(`Username is: ${process.env.PRACTICE_USERNAME}`);
    console.log(`Password is: ${process.env.PRACTICE_PASSWORD}`);
});

test('@env-test Testing env variables', async ({ page }) => {
  console.log(`Username is: ${process.env.PRACTICE_USERNAME}`);
  console.log(`Password is: ${process.env.PRACTICE_PASSWORD}`);
});

test("Bypass authentication by encoding credentials into base64 format", async ({
  page,
}) => {
  let encodedCredentials = Buffer.from(
    `${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`
  ).toString("base64"); //Converting username and password into base64 format
  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${encodedCredentials}`,
  }); //Setting the base64 encoded credentials in the Authorization header

  await page.goto("https://practice.cydeo.com/basic_auth");
  await page.waitForTimeout(3000);
});