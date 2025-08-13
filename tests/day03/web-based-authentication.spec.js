import { test } from "@playwright/test";

test("Bypass authentication by embedding credentials into the URL", async ({
  page,
}) => {
  //https://username:password@example.com is the URL with embedded credentials. This URL is used to bypass authentication
  await page.goto("https://admin:admin@practice.cydeo.com/basic_auth");
  await page.waitForTimeout(3000);
});

test("Bypass authentication by encoding credentials into base64 format", async ({page}) => {
  let encodedCredentials = Buffer.from("admin:admin").toString("base64"); //Converting username and password into base64 format  
  await page.setExtraHTTPHeaders({'Authorization': `Basic ${encodedCredentials}`}); //Setting the base64 encoded credentials in the Authorization header
  
  await page.goto("https://practice.cydeo.com/basic_auth");
  await page.waitForTimeout(3000);
});