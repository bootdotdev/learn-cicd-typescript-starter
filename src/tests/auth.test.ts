// src/tests/auth.test.ts
import { describe, test, expect } from "vitest";
import { getAPIKey } from "../api/auth.js";
import type { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  test("returns null if no Authorization header is present", () => {
    const headers: IncomingHttpHeaders = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null if Authorization header does not start with 'ApiKey'", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Bearer abc123",
    };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null if Authorization header is malformed", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey", // missing key
    };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns the API key if Authorization header is correct", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey my-secret-key",
    };
    expect(getAPIKey(headers)).toBe("my-secret-key");
  });
});