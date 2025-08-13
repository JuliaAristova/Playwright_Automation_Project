import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/web-tables");
  });

  test("Web table test", async ({ page }) => {
    let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");
    await page.waitForTimeout(3000);
    //finding all rows
    let rows = await table.locator("//tr").all();
    expect(rows.length).toBe(9);

    //finding all columns
    let columns = await table.locator("//th").all();
    expect(columns.length).toBe(13);

    //finding all columns
    let cells = await table.locator("//td").all();
    expect(cells.length).toBe(104);

    for (let cell of cells) {
      console.log(await cell.textContent());
    }
  });

  test("Rows test", async ({ page }) => {
    let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");
    await page.waitForTimeout(3000);
    let rows = await table.locator("//tr").all();
    console.log("===================");
    for (let row of rows) {
      let cells = await row.locator("//td").all();
      for (let cell of cells) {
        console.log(await cell.textContent());
      }
      console.log("----------------");
    }

    //iterating throw rows excluding first and last cells
    for (let row of rows) {
      let cells = await row.locator("//td").all();
      if (cells.length > 2) {
        for (let i = 1; i < cells.length - 1; i++) {
          console.log(await cells[i].textContent());
        }
        console.log("--------");
      }
    }
  });

  test("Web table checkboxes test", async ({ page }) => {
    let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");
    await page.waitForTimeout(3000);

    table.locator;
    let checkboxes = await table.locator("//input[@type='checkbox']").all();

    for (let checkbox of checkboxes) {
      await checkbox.check();
      await expect(checkbox).toBeChecked();
    }
    await page.waitForTimeout(3000);
  });
});
