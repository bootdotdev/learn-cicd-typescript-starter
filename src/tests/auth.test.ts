import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns null when authorization header is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null when authorization header has wrong scheme", () => {
    expect(getAPIKey({ authorization: "Bearer sometoken" })).toBeNull();
  });

  test("returns null when authorization header has no key after scheme", () => {
    expect(getAPIKey({ authorization: "ApiKey" })).toBeNull();
  });

  test("returns the API key when header is valid", () => {
    expect(getAPIKey({ authorization: "ApiKey my-secret-key" })).toBe(
      "my-secret-key",
    );
  });
});
