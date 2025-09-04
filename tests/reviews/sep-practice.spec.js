import { test } from "@playwright/test";

test("SEP practice", async ({ page }) => {
  // Login:
  const CREDENTIALS = Buffer.from(
    `${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`
  ).toString("base64");

  await page.setExtraHTTPHeaders({ Authorization: `Basic ${CREDENTIALS}` });

  await page.goto(process.env.SEP_QA_URL);

  //  await page.waitForTimeout(3000);

  //Start Application Step:
  let firstNameInputBox =  page.locator("//input[@formcontrolname='firstName']");
  await firstNameInputBox.fill("Julia");

  let lastNameInputBox =  page.locator("//input[@formcontrolname='lastName']");
  await lastNameInputBox.fill("Aristova");

  let phoneInputBox = page.locator("//input[@formcontrolname='phoneNumber']"); 
  await phoneInputBox.fill("5710000001");

  let emailInputBox = page.locator("//input[@formcontrolname='email']");
  await emailInputBox.fill("JuliaAr@gmail.com");

  let howDidYouHearDropDown = page.locator("//mat-label[text()='How did you hear about us?']");
  await howDidYouHearDropDown.click();
  await page.click("//span[text()='Email']");

  let nextBttn1 = page.locator("//button[text()=' Next']");
  await nextBttn1.click();

  // Payment Plan Step:
  let upfrontPaymentPlan = page.locator("//span[@class='payment-type' and normalize-space()='Upfront']");
  await upfrontPaymentPlan.click();

  let nextBttn2 = page.locator("//button[@class='next-button' and text()='Next']");
  await nextBttn2.click();

  // Review and Submit:
  let paymentFrame = page.frameLocator("//iframe[@title='Secure payment input frame']");

  let cardNumberInputBox = paymentFrame.locator("//input[@id='Field-numberInput']");
  await cardNumberInputBox.fill("4242424242424242");

  let expiryDateInputBox = paymentFrame.locator("//input[@id='Field-expiryInput']");
  await expiryDateInputBox.fill("12/34");

  let cvcInputBox = paymentFrame.locator("//input[@id='Field-cvcInput']");
  await cvcInputBox.fill("123");

  let zipCodeInputBox = paymentFrame.locator("//input[@id='Field-postalCodeInput']");
  await zipCodeInputBox.fill("12345");

  let termsConditionsCheckbox = page.locator("//input[@id='defaultCheck2']");
  await termsConditionsCheckbox.check();

  let payBttn = page.locator("//button[.//span[text()='Pay']]");
  await payBttn.click();

  await page.waitForTimeout(3000);
});
