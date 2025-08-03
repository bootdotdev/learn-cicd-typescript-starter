import { describe, expect, test } from "vitest";
import { getAPIKey } from "src/api/auth";
import type { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  test("returns API key when header is valid", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey abc123",
    };
    expect(getAPIKey(headers)).toBe("abc123");
  });

  test("returns null when authorization header is missing", () => {
    const headers: IncomingHttpHeaders = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization format is invalid", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Bearer xyz",
    };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when header is malformed", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey",
    };
    expect(getAPIKey(headers)).toBeNull();
  });
});
