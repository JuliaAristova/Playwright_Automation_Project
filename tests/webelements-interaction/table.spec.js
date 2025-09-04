import { test, expect } from "@playwright/test";

test("Table test", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const table = page.locator("table[name='BookTable']");

  //total number of rows and colums
  const columns = await table.locator("th").all();
  console.log(`Number of columns: ${columns.length}`);

  const rows = table.locator("tr");
  console.log("Number of rows including header: ", await rows.count());

  expect(await rows.count()).toBe(7);

  // select a particular row
  const matchedRow = rows.filter({
    has: page.locator("td"),
    hasText: "Master In Java",
  });
  console.log(await matchedRow.textContent());
});

test("Select product in the table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = page.locator("#productTable");
  const rows = table.locator("tr");

  await selectItem(rows, page, "Laptop");
  await selectItem(rows, page, "Smartwatch");
  await page.waitForTimeout(3000);
});

test("Read all data from a page of a table with pagination", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = page.locator("#productTable");
  const rows = table.locator("tr");
  const columns = await table.locator("th");

  //read all product id, name, and price
  for (let i = 0; i < (await rows.count()); i++) {
    //rows

    const row = rows.nth(i);
    const tds = row.locator("td");

    for (
      let j = 0;
      j < (await tds.count()) - 1;
      j++ //columns
    )
      console.log(await tds.nth(j).textContent());
  }
  await page.waitForTimeout(3000);
});

test("Read data from all pages of a table with pagination", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = page.locator("#productTable");
  const pages = await page.locator("#pagination li a");
  console.log("Number of pages: ", await pages.count());
  const rows = table.locator("tr");
  const columns = await table.locator("th");

  for (let p = 0; p < (await pages.count()); p++) {
    if (p > 0) {
      await pages.nth(p).click();
    }
    for (let i = 0; i < (await rows.count()); i++) {
      //rows

      const row = rows.nth(i);
      const tds = row.locator("td");

      for (let j = 0; j < (await tds.count()) - 1; j++) {
        //columns
        console.log(await tds.nth(j).textContent());
      }
    }
  }
  await page.waitForTimeout(3000);
});

async function selectItem(row, page, name) {
  const matchedRow = row.filter({
    has: page.locator("td"),
    hasText: name,
  });
  await matchedRow.locator("input").check();
}
