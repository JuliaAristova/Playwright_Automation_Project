import { test, expect } from "@playwright/test";

test("Window pop-up test", async ({ page }) => {
  //creating event listener for monitoring window pop-up
  //no await  to avoid waiting it
  let promisedNewPageEvent = page.waitForEvent("popup");

  await page.goto("https://practice.cydeo.com/windows");

  await page.waitForTimeout(3000);
  await page.click("text='Click Here'"); //trigers pop-up event

  let newPage = await promisedNewPageEvent; //wait for the promise to be resolved

  await page.waitForTimeout(3000);

  await expect(newPage).toHaveTitle("New Window");
  await expect(page).toHaveTitle("Windows");

  await page.bringToFront();
  await page.waitForTimeout(3000);
  let firstWindowElement = page.getByText("Opening a new window");
  await expect(firstWindowElement).toBeVisible();

  await newPage.bringToFront();
  await page.waitForTimeout(3000);
  let secondWindowELement = page.getByText("New Window");
  await expect(secondWindowELement).toBeVisible();
});
