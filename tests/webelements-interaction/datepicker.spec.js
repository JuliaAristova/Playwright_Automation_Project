import { test, expect } from "@playwright/test";

test("Datepicker test - enter date", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //datepicker allows to enter date (check date format manually first)
  await page.fill("#datepicker", "08/31/2025");
  await page.waitForTimeout(3000);
});

test("Datepicker test - select date", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // select date in the datepicker
  let year = "2025";
  let month = "December";
  let date = "25";

  await page.click("#datepicker"); //opens calendar

  while (true) {
    let currentYear = await page.locator(".ui-datepicker-year").textContent();
    let currentMonth = await page.locator(".ui-datepicker-month").textContent();
    if (currentYear == year && currentMonth == month) {
      break;
    }
    await page.locator("[title='Next']").click(); //click Next button
    //await page.locator("[title='Prev']").click(); //click Previous button
  }

  //selecting a date using loop
  let dates = await page.$$("//a[@class='ui-state-default']");
  for (let dt of dates) {
    if ((await dt.textContent()) == date) {
      await dt.click();
    }
  }

  date = "31";

  // selecting using text //a[@class='ui-state-default'][(text()=30]
  await page.click(`a.ui-state-default:has-text("${date}")`);
  // await page.click(`xpath=//a[@class='ui-state-default' and text()='${date}']`);
  await page.waitForTimeout(5000);
});
