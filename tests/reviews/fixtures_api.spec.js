import {expect, test} from "@playwright/test"
import { emit } from "process"

test("Request fixture test", async({baseURL, request}) => {
  //send a post request to the endpoint  /api/user
  //with a JSON payload: {name:"John Doe", emaik:"john.doe@example.com"}

  let response = await request.post("/api/user1", {
    json: { name: "John Doe", email: "john.doe.example.com" },
  });
  await expect(response.status()).toBe(200);

  let user = response.json();

  //Assert that the user hace name "John Doe" and email "john.doe.example.com"
  await expect(username).toBe("John Doe");
  await expect(user.email).toBe("john.doe.example.com");
  await user.h
})