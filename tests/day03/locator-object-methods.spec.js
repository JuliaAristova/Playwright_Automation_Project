import { test } from "@playwright/test";
test.describe("Test Group", () => {

  //create beforeEach hook to navigate to https://practice.cydeo.com
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });
  //check() - checks radio buttons and checkboxes if they are not checked
  test("Check", async ({ page }) => {
    //  let checkBoxesLink = page.locator("text='Checkboxes'");

    let checkBoxesLink = page.getByText("Checkboxes");
    await checkBoxesLink.click();
    await page.waitForTimeout(3000);
    let checkBox1 = page.locator("//input[@id='box1']");
    await checkBox1.check();
    await page.waitForTimeout(3000);
  });

  //uncheck() - ubchecks radio buttons and checkboxes if they are not unchecked
  test("Uncheck", async ({ page }) => {
       let checkBoxesLink = page.getByText("Checkboxes");
       await checkBoxesLink.click();
       await page.waitForTimeout(3000);
       let checkBox2 = page.locator("//input[@id='box2']");
       await checkBox2.uncheck();
       await page.waitForTimeout(3000);
  });
  
  //select() - selects options in dropdowns <select>
  test("Select", async ({ page }) => {
  let dropdownLink = page.getByText("Dropdown");
  await dropdownLink.click();
  await page.waitForTimeout(3000);  
  let simpleDropdown = page.locator("//select[@id='dropdown']");
  //await simpleDropdown.selectOption("1"); //selecting by value
  //await simpleDropdown.selectOption({ label: "Option 1" }); //selecting by label  
  await simpleDropdown.selectOption({index: 1}); //selecting by index (1-based)  
  await page.waitForTimeout(3000);
  });
});