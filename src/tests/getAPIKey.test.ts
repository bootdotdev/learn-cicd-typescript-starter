import { describe, test, expect } from "vitest";
import { getAPIKey } from "../api/auth";
import type { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  test("returns API key when authorization header is valid", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey my-secret-key",
    };

    expect(getAPIKey(headers)).toBe("my-secret-key");
  });

  test("returns null when authorization header is missing", () => {
    const headers: IncomingHttpHeaders = {};

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization format is invalid", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Bearer my-secret-key",
    };

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization is malformed", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey",
    };

    expect(getAPIKey(headers)).toBeNull();
  });
});
