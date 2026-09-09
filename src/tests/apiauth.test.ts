import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";
import type { IncomingHttpHeaders } from "node:http";

describe("getAPIKey", () => {
  test("returns null when the authorization header is missing", () => {
    const headers: IncomingHttpHeaders = {};

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when the authorization header has no API key", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey",
    };

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when the authorization scheme is invalid", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Bearer my-api-key",
    };

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns the API key when the authorization header is valid", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey my-api-key",
    };

    expect(getAPIKey(headers)).toBe("my-api-key");
  });

  test("returns the second value when additional values are present", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey my-api-key extra",
    };

    expect(getAPIKey(headers)).toBe("my-api-key");
  });
});
