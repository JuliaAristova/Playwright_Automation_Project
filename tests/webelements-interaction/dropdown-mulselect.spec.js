import {test, expect} from "@playwright/test"

test("Multiselect dropdown test", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //select multiple options from multi-select dropdown
    await page.selectOption('#colors', ["Blue", "Red", "Yellow"]);

    await page.waitForTimeout(3000);

    //verify number of options in dropdown
    const options = page.locator('#colors option');
    const optionsArray = await page.locator("#colors option").all();
    await expect(options).toHaveCount(7);
   
    console.log("Number of options: ", optionsArray.length);
    expect(optionsArray.length).toBe(7);

    for(let option of optionsArray){
        for (let option of optionsArray) {
          const text = (await option.textContent()).trim();
          if (text) console.log(text);
        }
    }

});