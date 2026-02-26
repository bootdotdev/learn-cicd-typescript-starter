import { describe, test, expect } from "vitest";
import { getAPIKey } from "../api/auth";
import { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  test("returns null when authorization header is missing", () => {
    const headers: IncomingHttpHeaders = {};

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  test("returns null when authorization header has wrong format", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Bearer abc123",
    };

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  test("returns null when authorization header is malformed", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey",
    };

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  test("returns API key when authorization header is valid", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey my-secret-key",
    };

    const result = getAPIKey(headers);

    expect(result).toBe("my-secret-key");
  });
});
