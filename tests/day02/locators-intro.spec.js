import { test } from "@playwright/test";

test("Simple google test", async ({ page }) => {
  await page.goto("https://www.google.com");
  await page.waitForTimeout(3000);

  // Locate the search input field
  //let searchBox = page.locator("//textarea[@class='gLFyf']");

  //let searchBox = page.locator("//textarea[@id='APjFqb']");

  //has built-in waiting, returns element 
  let searchBox = page.locator("#APjFqb");

  //await searchBox.type("Playwright");  //types char by char
  await searchBox.fill("Playwright");

  await page.waitForTimeout(3000);
  searchBox.press("Enter");
  //  await page.waitForTimeout(3000);

});
test("Google search test @sel", async ({ page }) => {
  await page.goto("https://www.google.com");
  //  await page.waitForTimeout(3000);

  // does not have aout-waiting, returns element handling 
  let searchBox = await page.$("#APjFqb");
  //let links = await page.$$("a");

  //await searchBox.type("Playwright");
  await searchBox.fill("Playwright");

  //  await page.waitForTimeout(3000);
  searchBox.press("Enter");
  //  await page.waitForTimeout(3000);

});
/*
<textarea jsname="yZiJbe" class="gLFyf" aria-controls="Alh6id" 
aria-owns="Alh6id" autofocus="" title="Search" value="" 
aria-label="Search" placeholder="" aria-autocomplete="both" 
aria-expanded="true" aria-haspopup="false" autocapitalize="off" 
autocomplete="off" autocorrect="off" id="APjFqb" 
maxlength="2048" name="q" role="combobox" rows="1" 
spellcheck="false" 
data-ved="0ahUKEwj9o9OJn-KOAxXUGlkFHT8ODQIQ39UDCAU" 
aria-activedescendant="" style=""></textarea>
*/
