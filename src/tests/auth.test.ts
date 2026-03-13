import { getAPIKey } from "../api/auth";
import { describe, test, expect } from "vitest";
describe("getAPIKey", () => {
  test("returns a string when authorization header is present", () => {
    const headers = { authorization: "ApiKey my-secret-key" }; // ✅ include "ApiKey"
    const key = getAPIKey(headers);
    expect(key).not.toBeNull();        // key should not be null
    expect(typeof key).toBe("string"); // key should be string
  });

  test("returns a non-empty string when authorization header is present", () => {
    const headers = { authorization: "ApiKey my-secret-key" }; // ✅ include "ApiKey"
    const key = getAPIKey(headers);
    expect(key).not.toBeNull();             
    expect((key as string).length).toBeGreaterThan(0); // key length > 0
  });

  test("returns null when authorization header is missing", () => {
    const headers = {}; // no authorization header
    const key = getAPIKey(headers);
    expect(key).toBeNull();
  });
});
