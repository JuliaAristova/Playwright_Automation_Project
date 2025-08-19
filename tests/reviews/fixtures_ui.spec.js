import { test, firefox } from "@playwright/test";

test("Fixtures test", async ({ context }) => {
  let linkedinPage = await context.newPage();
  let githubPage = await context.newPage();
  let facebookPage = await context.newPage();
  let youtubePage = await context.newPage();

  await linkedinPage.waitForTimeout(2000);
  await githubPage.waitForTimeout(2000);
  await facebookPage.waitForTimeout(2000);
  await youtubePage.waitForTimeout(2000);

  await linkedinPage.bringToFront();
  await linkedinPage.goto("https://linkedin.com");
  await linkedinPage.waitForTimeout(2000);

  await githubPage.bringToFront();
  await githubPage.goto("https://github.com");
  await githubPage.waitForTimeout(2000);

  await facebookPage.bringToFront();
  await facebookPage.goto("https://facebook.com");
  await facebookPage.waitForTimeout(2000);

  await youtubePage.bringToFront();
  await youtubePage.goto("https://youtube.com");
  await youtubePage.waitForTimeout(2000);
});

test("Browser instances test", async ({ browser }) => {
  let context1 = await browser.newContext();
  let context2 = await browser.newContext();

  let page1 = await context1.newPage();
  let page2 = await context1.newPage();

  let page3 = await context2.newPage();
  let page4 = await context2.newPage();
  await page1.waitForTimeout(4000);

  await page1.bringToFront();
  page1.goto("https://linkedin.com");
  await page1.waitForTimeout(3000);

  await page2.bringToFront();
  page2.goto("https://github.com");
  await page2.waitForTimeout(3000);

  await page3.bringToFront();
  page3.goto("https://facebook.com");
  await page3.waitForTimeout(3000);

  await page4.bringToFront();
  page4.goto("https://youtube.com");
  await page4.waitForTimeout(3000);
});

test("Only test to be executed on Firefox", async ({}) => {
  let browser = await firefox.launch();
  let context = await browser.newContext();
  let page = await context.newPage();

  await page.goto("https://linkedin.com");
  await page.waitForTimeout(3000);
});
