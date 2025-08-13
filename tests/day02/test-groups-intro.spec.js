import {test} from "@playwright/test";

test.describe("Hooks demo", () => {

       test.beforeAll(async () => {
              console.log("Before All is executed");
       });
       test.afterAll(async () => {
              console.log("After All is executed");
       });

       test.beforeEach(async ({ page }) => {
              console.log("Before Each is executed");
       });
       test.afterEach(async ({ page }) => {
              console.log("After Each is executed");
       });

       test("Test case 1", async () => {
        console.log("Test case 1 is execued");
       });
       test("Test case 2", async () => {
        console.log("Test case 2 is execued");
       });
       test("Test case 3", async () => {
        console.log("Test case 3 is execued");
       });
} );