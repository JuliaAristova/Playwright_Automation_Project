
/*
Promise <Response | null>  page.goto("url")
Promise <void> page.setWindiwSize({width: x, height:y})
Promise <string> page.title()
<string>  page.url()
*/

import { test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");

  //pause for 3 seconds
   await page.waitForTimeout(3000);

  //get the title of the page
  let title = await page.title();
  console.log(title);
});

test("Getting url of the page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");

  let url = page.url();
  console.log(url);
});

test("Set the window size", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");
  await page.waitForTimeout(3000);

  page.setViewportSize({ width: 1850, height: 1080 });
  await page.waitForTimeout(3000);
});
