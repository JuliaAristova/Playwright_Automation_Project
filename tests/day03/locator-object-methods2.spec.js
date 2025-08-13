import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to a page
    await page.goto("https://practice.cydeo.com");
  });
  //innerText()  returns visible text content of the element.
  test.only("innerText", async ({ page }) => {
    let headerElement = page.locator("//h1/span[@class='h1y']");
    let actualText = await headerElement.innerText();
    console.log("Actual Text:", actualText);
  });

  //inputValue()  returns the current value of an input element - <input>, <textarea>, <select>  test("inputValue", async ({ page }) => {
  test.only("inputValue", async ({ page }) => {
    let inputsLink = page.getByText("Inputs");
    await inputsLink.click();
    await page.waitForTimeout(3000);
    let inputBox = page.locator("//input[@type='number']");
    await page.waitForTimeout(3000);
    inputBox.fill("123");
    await page.waitForTimeout(3000);
    let actualInput = await inputBox.inputValue();
    console.log(actualInput);
  });

  //getAttribute()  returns the value of an attribute on an element 
  test("getAttribute", async ({ page }) => {
  
        let testingLink = page.locator("//a[@href='/abtest']");
        await page.waitForTimeout(3000);
        let hrefLink = await testingLink.getAttribute("href");
        console.log(hrefLink);
  });
});
