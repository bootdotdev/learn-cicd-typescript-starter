import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns the API key from valid header", () => {
    const headers = { authorization: "ApiKey my-secret-key" };
    const key = getAPIKey(headers);

    expect(key).toBe("my-secret-key");
  });
});

const person = {
  isActive: true,
  age: 32,
};

describe("person", () => {
  test("person is defined", () => {
    expect(person).toBeDefined();
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });
});
