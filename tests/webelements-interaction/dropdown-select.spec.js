import { test, expect } from "@playwright/test";

test("Dropdown test", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const countryDropdown = page.locator("//select[@id='country']");

  //1 - select option by label(visible text)
  await countryDropdown.selectOption({ label: "France" });
  //await page.waitForTimeout(3000);

  //2 - select option by visible text
  await countryDropdown.selectOption("United Kingdom");
  //await page.waitForTimeout(3000);

  //3 - select option by value
  await countryDropdown.selectOption({ value: "usa" });
  //await page.waitForTimeout(3000);

  //4 - select option by index (starts from 0)
  await countryDropdown.selectOption({ index: 5 });
  //await page.waitForTimeout(3000);

  //5 - select from page using option
  await page.selectOption("#country", "Canada");
  //await page.waitForTimeout(3000);

  //Assertions
  //check number of options available - 1
  const countryOptions = page.locator("#country option");
  await expect(countryOptions).toHaveCount(10);

  //check number of options available - 2
  const countries = await page.locator("#country option").all();
  //const countries = await page.$$("#country option");
  console.log("Number of option: ", countries.length);

  //check presence of value in the dropdown - 1
  const content = await page.locator("#country").textContent();
  expect(content.includes("Canada")).toBeTruthy();

  //check presence of value in the dropdown - 2
  let countryExist = false;
 
  for(let country of countries){
    //console.log(await country.textContent());
    let value = await country.textContent();
    if(value.includes('France')){
        countryExist = true;
        break;
    }
  }
  expect(countryExist).toBeTruthy();
});
