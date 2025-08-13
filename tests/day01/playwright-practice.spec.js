import { test, expect } from "@playwright/test"; //new way to import test from "@playwright/test"

/*
test - 2 parameters: 
- String - name of the test
- Anonymous async function
*/
test("Open google page", async ({ page }) => {
  //test codes
  await page.goto("https://www.google.com");

  await page.waitForTimeout(3000); // wait for 3 seconds for learning purpose
});
