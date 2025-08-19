import { test } from "@playwright/test";


test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/javascript_alerts");
  });
  test("Regular alert", async ({ page }) => {
  /* to handle the alert manually
    page.on("dialog", async (alert) => {
      console.log(`Alert message: ${alert.message()}`);
      await page.waitForTimeout(3000);
      await alert.accept();
    });
  */
    let clickForJsAlertButton = page.locator("//button[@onclick='jsAlert()']");
    await clickForJsAlertButton.click();
    await page.waitForTimeout(3000);
    //js alert is handled automatically by playwright - nothing to do here

  });

  test("Confirmation alert", async ({ page }) => {

      page.on("dialog", async (alert) => {
        console.log(`Alert message: ${alert.message()}`);
        await page.waitForTimeout(3000);
        await alert.dismiss();
      });
      
        let clickForJsConfirmButton = page.locator("//button[@onclick='jsConfirm()']"
        );
        await clickForJsConfirmButton.click();
        await page.waitForTimeout(3000);
        //js confirm by default is cancelled by playwright
        });

  test("Prompt alert", async ({ page }) => {

    page.on("dialog", async (alert) => {
      console.log(`Alert message: ${alert.message()}`);
       await alert.accept("TEST JS PROMPT");
      // await page.waitForTimeout(3000);
    });
    
        let clickForJsPromptButton = page.locator("//button[@onclick='jsPrompt()']");
        await clickForJsPromptButton.click();
      //  await page.waitForTimeout(3000);
  });
});
