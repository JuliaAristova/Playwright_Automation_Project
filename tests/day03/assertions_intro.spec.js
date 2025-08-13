import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    // 1 way to check if title is 'Practice'
    await expect(page).toHaveTitle("Practice");
    // another way to check title is 'Practice'
    expect(await page.title()).toBe("Practice");
  });

  test("Verify checkboxes are checked", async ({ page }) => {
    await page.getByText("Checkboxes").click();
    await page.waitForTimeout(3000);
    let checkBox1 = page.locator("//input[@id='box1']");
    let checkBox2 = page.locator("//input[@id='box2']");

    await checkBox1.check();
    await checkBox2.check();

    //passing locators to expect function to check if the elements are checked
    // firtst way
    await expect(checkBox1).toBeChecked();
    await expect(checkBox2).toBeChecked();

    // second way
    expect(await checkBox1.isChecked()).toBeTruthy();
  });

  test("Verify checkboxes are unchecked", async ({ page }) => {
    await page.getByText("Checkboxes").click();
    await page.waitForTimeout(3000);
    let checkBox1 = page.locator("//input[@id='box1']");
    let checkBox2 = page.locator("//input[@id='box2']");

    await checkBox1.uncheck();
    await checkBox2.uncheck();

    await expect(checkBox1).not.toBeChecked();
    await expect(checkBox2).not.toBeChecked();

    //other way to check if checkboxes are unchecked  
    expect(await checkBox1.isChecked()).toBeFalsy();
    expect(await checkBox2.isChecked()).toBeFalsy();

  });

  test("Verify visible text of the element", async ({ page }) => {
    let headerElement = page.locator("span.h1y");
    
    await expect(headerElement).toHaveText("Test Automation Practice");
 
    // another way to verify visible text
    expect(await headerElement.innerText()).toEqual("Test Automation Practice"); 
  });
});
