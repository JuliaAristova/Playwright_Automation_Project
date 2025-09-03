import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to a page
    await page.goto("https://practice.cydeo.com");
  });

  //textContent() returns visible and hidden text content of the element.
  test("textContent", async ({ page }) => {
    let headerElement = page.locator("//h1/span[@class='h1y']");
    let actualText = await headerElement.textContent();
    console.log("Actual Text:", actualText);
  });

  //innerText()  returns visible text content of the element.
  test("innerText", async ({ page }) => {
    let headerElement = page.locator("//h1/span[@class='h1y']");
    let actualText = await headerElement.innerText();
    console.log("Actual Text:", actualText);
  });

  //inputValue()  returns the current value of an input element - <input>, <textarea>, <select>  test("inputValue", async ({ page }) => {
  test("inputValue", async ({ page }) => {
    let inputsLink = page.getByText("Inputs");
    await inputsLink.click();
    //    await page.waitForTimeout(3000);
    let inputBox = page.locator("//input[@type='number']");
    //    await page.waitForTimeout(3000);
    inputBox.fill("123");
    //    await page.waitForTimeout(3000);
    let actualInput = await inputBox.inputValue();
    console.log(actualInput);
  });

  //getAttribute()  returns the value of an attribute on an element 
  test("getAttribute", async ({ page }) => {
    let abTestingLink = page.locator("//a[@href='/abtest']");
    //  await page.waitForTimeout(3000);
    let hrefLink = await abTestingLink.getAttribute("href");
    console.log(hrefLink);

    let testingLinks = await page.locator("//ul[@class='list-group']/li/a").all();

    for (let link of testingLinks) {
      let href = await link.getAttribute("href");
      console.log(href);
    }
  });
});
