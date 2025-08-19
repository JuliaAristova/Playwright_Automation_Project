import {test, expect} from "@playwright/test";

test("Auto Suggest DropDown", async ({ page }) => {
  // Navigate to the RedBus website
  await page.goto("https://www.redbus.in/");

  // Fill the input field with a search term
  let fromBox = page.locator(
      "(//div[@class='placeHolderContainer___da35ad']//div[@class='labelCityWrapper___8fa82e']//div)[1]"
    );
    await fromBox.click();
    await page.waitForTimeout(3000);
    await fromBox.fill("Bengaluru");

    await page.waitForTimeout(3000);

  // Wait for the suggestions to appear
  await page.waitForSelector(
    "//li[contains(@class,'sc-iwsKb')]//div//text[@class='placeHolderMainText']"
  );

  // Retrieve all suggested cities
  const suggestedCity = await page.$$(
    "//li[contains(@class,'sc-iwsKb')]//div//text[@class='placeHolderMainText']"
  );

  // Loop through suggestions and click on the desired one
  for (let option of suggestedCity) {
    const value = await option.textContent();
    if (value.includes("Bejai")) {
      await option.click();
      break; // Exit loop after clicking
    }
  }

  // Wait for a few seconds to observe the result
  await page.waitForTimeout(5000);
});