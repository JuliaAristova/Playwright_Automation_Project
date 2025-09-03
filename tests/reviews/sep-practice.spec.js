import { test } from "@playwright/test";

test("SEP practice", async ({ page }) => {
  // Login:
  const CREDENTIALS = Buffer.from(
    `${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`
  ).toString("base64");

  await page.setExtraHTTPHeaders({ Authorization: `Basic ${CREDENTIALS}` });

  await page.goto(process.env.SEP_QA_URL);

  //  await page.waitForTimeout(3000);

  //Start Application step:
  let firstNameInputBox = await page.locator(
    "//input[@formcontrolname='firstName']"
  );
  await firstNameInputBox.fill("Julia");

  let lastNameInputBox = await page.locator(
    "//input[@formcontrolname='lastName']"
  );
  await lastNameInputBox.fill("Aristova");

  let phoneInputBox = await page.locator(
    "//input[@formcontrolname='phoneNumber']"
  );
  await lastNameInputBox.fill("JuliaAr@gmail.com");

  let emailInputBox = page.locator("//input[@formcontrolname='email']");
  await phoneInputBox.fill("5710000001");

  let howDidYouHearDropdown = page.locator("//mat-label[text()='How did you hear about us?']");
  await howDidYouHearDropdown.click();

});
