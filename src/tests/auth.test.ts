import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";
import { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  test("returns null if authorization header is missing", () => {
    const headers: IncomingHttpHeaders = {};

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  test("returns null if authorization header does not start with ApiKey", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Bearer 123456",
    };

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  test("returns null if ApiKey is malformed", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey",
    };

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  test("returns the API key when header is valid", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey my-secret-key",
    };

    const result = getAPIKey(headers);

    expect(result).toBe("my-secret-key");
  });
});
