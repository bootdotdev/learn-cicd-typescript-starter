import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";
import { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  test("returns null when no authorization header is present", () => {
    const headers: IncomingHttpHeaders = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization header is undefined", () => {
    const headers: IncomingHttpHeaders = {
      authorization: undefined,
    };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization header doesn't start with 'ApiKey'", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Bearer some-token",
    };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization header has no space separator", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey",
    };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization header is just 'ApiKey '", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey ",
    };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns the API key when authorization header is valid", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey my-secret-key-123",
    };
    expect(getAPIKey(headers)).toBe("my-secret-key-123");
  });

  test("returns the API key with multiple words/dashes", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey abc-123-xyz-789",
    };
    expect(getAPIKey(headers)).toBe("abc-123-xyz-789");
  });

  test("handles authorization header with extra spaces in the key", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey key with spaces",
    };
    expect(getAPIKey(headers)).toBe("key with spaces");
  });

  test("returns null when authorization header format is incorrect (lowercase apikey)", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "apikey my-secret-key-123",
    };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("handles other headers present alongside authorization", () => {
    const headers: IncomingHttpHeaders = {
      "content-type": "application/json",
      authorization: "ApiKey valid-key",
      "user-agent": "test-agent",
    };
    expect(getAPIKey(headers)).toBe("valid-key");
  });
});
