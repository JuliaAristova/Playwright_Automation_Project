import {test, expect} from "@playwright/test"

test('Assertions', async({page}) => {
  await page.goto("https://demo.nopcommerce.com/");

  //1 - verify url
  await expect(page).toHaveURL("https://demo.nopcommerce.com/");

  //2 - verify title
  console.log(await page.title());
  await expect(page).toHaveTitle("nopCommerce demo store. Home page title");

  //3 - verify element is visible
  let logoElement = page.getByAltText("nopCommerce demo store");
  await expect(logoElement).toBeVisible();

  //4 - verify element is enabled/disabled
  let searchBox = page.locator("#small-searchterms");
  await expect(searchBox).toBeEnabled();
  await expect(searchBox).not.toBeDisabled();

  //5 - verify element is checked (radiobutton, checkbox)
  let radioButton = page.locator("#pollanswers-1");
  radioButton.check();
  await expect(radioButton).toBeChecked();

  //6 - verify element has attribute
  let currencyDropdown = page.locator("#customerCurrency");
  await expect(currencyDropdown).toHaveAttribute("aria-label", "Currency selector");

  //7 - verify element matches text (element always have inner text)
  let topicTitle = page.locator("div.topic-block-title>h2");
  await expect(topicTitle).toHaveText("Welcome to our store");
  
  //8 - verify element contains text (partial value)
  await expect(topicTitle).toContainText("Welcome");

  //9 - verify input has a value
  await expect(radioButton).toHaveValue('1');

  let searchStore = page.locator("//input[@name='q']");
  await searchStore.fill('smart phone');
  await expect(searchBox).toHaveValue('smart phone');
  
  //10 - verify list of elements has given length 
  let pollOptions = await page.locator("li.answer").all();
   expect(pollOptions.length).toBe(4);

   let currencyOptions = page.locator("#customerCurrency option");
   await expect(currencyOptions).toHaveCount(2);
   await expect(currencyOptions).not.toHaveCount(3);
});
