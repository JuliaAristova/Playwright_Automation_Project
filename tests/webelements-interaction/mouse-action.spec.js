import { test, expect } from "@playwright/test";

test("Mouse hover test", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");

  const computersLink = page.getByRole("link", { name: "Computers" });

  const notebooksLink = page.getByRole("link", { name: "Desktops" });

  //mouse hover
  await computersLink.hover();
  await notebooksLink.hover();

  await page.waitForTimeout(3000);
});

test("Right click test", async ({ page }) => {
  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
  let btn = page.locator("span.context-menu-one");

  //right click
  await btn.click({ button: "right" });
  await page.waitForTimeout(3000);
});

test("Double click test", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");
  let btn = page.getByText("Copy Text");

  //double click
  await btn.dblclick();

  await expect(page.locator("#field2")).toHaveValue("Hello World!");
  await page.waitForTimeout(3000);
});

test("Drag and Drop test", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");
  let source = page.locator("#draggable");
  let target = page.locator("#droppable");

  //drag and drop - approach 1
  await source.hover();
  await page.mouse.down();
  await target.hover();
  await page.mouse.up();

  expect(await page.locator("#droppable p").textContent()).toMatch("Dropped!");
  await page.waitForTimeout(3000);

  await page.reload();
  await page.waitForTimeout(3000);

  //drag and drop - approach 2
  await source.dragTo(target);
  expect(await page.locator("#droppable p").textContent()).toMatch("Dropped!");
  await page.waitForTimeout(3000);
});
