/*
playwright automatically handles alerts
*/

import { test, expect } from "@playwright/test";

test.skip("Simple Alert - with OK button", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //BEFORE opening an alert
  //dialog window handler -anabling alert handling
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am an alert box!");
    await dialog.accept();
  });
  //open an alert
  await page.click("//button[@id='alertBtn']");
});

test("Confirmation Alert - with OK and Cancel buttons", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //BEFORE opening an alert
  //dialog window handler -anabling alert handling
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button!");
    // await dialog.accept();  // closing by using OK
    await dialog.dismiss(); // closing by using Cancel
  });

  //open an alert
  await page.click("//button[@id='confirmBtn']");
  await expect(page.locator("#demo")).toHaveText("You pressed Cancel!");
});

test("Prompt Alert - with Input, OK and Cancel buttons", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //BEFORE opening an alert
  //dialog window handler -anabling alert handling
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter")
    await dialog.accept("King Lion"); // passing a value and closing by using OK
    //await dialog.dismiss(); // closing by using Cancel
  });
  await page.waitForTimeout(3000);

  //open an alert
  await page.click("//button[@id='promptBtn']");
  await expect(page.locator("#demo")).toHaveText("Hello King Lion! How are you today?");
});
