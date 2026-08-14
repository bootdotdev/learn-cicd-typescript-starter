import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns api key when authorization header is valid", () => {
    const headers = {
      authorization: "ApiKey test-key-123",
    };

    const result = getAPIKey(headers);
    expect(result).toBe("test-key-123");
  });

  test("returns null when authorization header is missing", () => {
    const headers = {};

    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("returns null when authorization header has wrong scheme", () => {
    const headers = {
      authorization: "Bearer test-key-123",
    };

    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("returns null when authorization header has no key", () => {
    const headers = {
      authorization: "ApiKey",
    };

    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});
