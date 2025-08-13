// const {test} = require("@playwright/test");  //old way to import test from "@playwright/test";  //new way to import test from "@playwright/test"
import {test, expect} from "@playwright/test";  //new way to import test from "@playwright/test"

test("Open google search", async ({page}) => {
    //test codes
    await page.goto("https://www.google.com");

    await page.waitForTimeout(3000);   // wait for 3 seconds for learning purpose

} );