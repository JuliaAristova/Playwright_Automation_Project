import { test, expect } from "@playwright/test";

test("Dropdown test", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/dropdown");

  page.locator("#dropdownMenuLink").click();
  await page.locator("div.dropdown-menu").waitFor(); // Wait for dropdown to appear

  const dropdownLinks = await page.locator("div.dropdown-menu a").all();

  for (const link of dropdownLinks) {
    console.log(await link.textContent());
  }
   expect(dropdownLinks.length).toBe(5);


  let linkExist = false;
 
  for(let link of dropdownLinks){
    let value = await link.textContent();
    if(value.includes('Amazon')){
        linkExist = true;
        break;
    }
  }
  expect(linkExist).toBeTruthy();
  
});
