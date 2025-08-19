import { test, expect } from "@playwright/test";

test("iFrame test", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  //find total amount of frames
  const allFrames = await page.frames();
  console.log(`Number of frames: ${allFrames.length}`);

  // 1 - Using name (if present) or url of the frame
  const frame1 = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });
  await frame1.fill("input[name='mytext1']", "Hello Frame 1!");

  await page.waitForTimeout(3000);

  //2 - Using frame locator
  const frame1l = page.frameLocator("frame[src='frame_1.html']");
  await frame1l.locator("input[name='mytext1']").clear();
  await page.waitForTimeout(3000);
});

test("Nested frames test", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  //locate a frame by name or url
  const frame3 = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });
  await frame3.fill("input[name='mytext3']", "Hello Frame 3!");

  const childFrames = await frame3.childFrames();
  console.log(`Number of child frames: ${childFrames.length}`);

  await childFrames[0].getByRole("radio", { name: "I am a human" }).check();
  await page.waitForTimeout(3000);

});
