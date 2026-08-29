import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey function", () => {
  test("should return a string", () => {
    const key = getAPIKey({ authorization: "ApiKey 12345" });
    expect(typeof key).toBe("string");
  });

  test("should not return an empty string", () => {
    const key = getAPIKey({ authorization: "ApiKey 12345" });
    expect(key).not.toBe("");
  });

  test("should return null if no authorization header", () => {
    const key = getAPIKey({});
    expect(key).toBeNull();
  });

  test("should return null if authorization format is wrong", () => {
    const key = getAPIKey({ authorization: "Bearer 12345" });
    expect(key).toBeNull();
  });
});