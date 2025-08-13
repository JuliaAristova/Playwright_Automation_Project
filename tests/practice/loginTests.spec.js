import { test, expect } from "@playwright/test";

test.describe("Login Flow", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.expandtesting.com/login");
    });

  test("valid login redirects to secure page", async ({ page }) => {
    await page.getByLabel("Username").fill("practice");
    await page.getByLabel("Password").fill("SuperSecretPassword!");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL(/.*secure/);
    await expect(
      page.getByText("You logged into a secure area!")
    ).toBeVisible();
  });

  test("invalid password shows error", async ({ page }) => {
    await page.getByLabel("Username").fill("practice");
    await page.getByLabel("Password").fill("WrongPassword");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByText("Your password is invalid!")).toBeVisible();
  });

  test("empty credentials show validation", async ({ page }) => {
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByText("Your username is invalid!")).toBeVisible();
  });

  test("logout returns to login page", async ({ page }) => {
    await page.getByLabel("Username").fill("practice");
    await page.getByLabel("Password").fill("SuperSecretPassword!");
    await page.getByRole("button", { name: "Login" }).click();
    await page.getByRole("button", { name: "Logout" }).click();
    await expect(page).toHaveURL(/.*login/);
    await expect(
      page.getByRole("heading", { name: "Login Page" })
    ).toBeVisible();
  });
});
