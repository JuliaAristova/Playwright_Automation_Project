import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

test("File download", async ({ page }) => {
  //create event listener for download
  let promisedDownloadEvent = page.waitForEvent("download");

  await page.goto("https://practice.cydeo.com/download");

  await page.click("text='PPG.jpg'"); //triggers download event
  let download = await promisedDownloadEvent;

  //specify directory where to save a file
  let downloadPath = path.join(
    __dirname,
    "./downloads",
    download.suggestedFilename()
  );
  await download.saveAs(downloadPath);

  expect(fs.existsSync(downloadPath)).toBeTruthy();
});

test("File upload", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/upload");

  //path to the file to be uploaded
  let filePath = path.join(__dirname, "./uploads", "TestUpload.txt");

  await page.waitForTimeout(3000);
  //first parameter - element to click to Select a file
  await page.setInputFiles("//input[@id='file-upload']", filePath);

  await page.waitForTimeout(3000);
  await page.click("text='Upload'");
  await page.waitForTimeout(3000);

  await expect(page.getByText("File Uploaded!")).toBeVisible();
});
