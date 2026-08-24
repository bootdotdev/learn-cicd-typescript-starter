import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns the API key when authorization header is valid", () => {
    const headers = {
      authorization: "ApiKey abc123",
    };

    expect(getAPIKey(headers)).toBe("abc123");
  });

  test("returns null when authorization header is missing", () => {
    const headers = {};

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization type is not ApiKey", () => {
    const headers = {
      authorization: "Bearer abc123",
    };

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization header has no API key", () => {
    const headers = {
      authorization: "ApiKey",
    };

    expect(getAPIKey(headers)).toBeNull();
  });
});
