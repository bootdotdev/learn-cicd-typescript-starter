import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns null when authorization header is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null when authorization header has wrong scheme", () => {
    expect(getAPIKey({ authorization: "Bearer abc123" })).toBeNull();
  });

  test("returns null when authorization header does not include API key", () => {
    expect(getAPIKey({ authorization: "ApiKey" })).toBeNull();
  });

  test("returns API key when authorization header uses ApiKey scheme", () => {
    expect(getAPIKey({ authorization: "ApiKey abc123" })).toBe("abc123");
  });
});