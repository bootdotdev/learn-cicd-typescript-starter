import { describe, expect, test } from "vitest";
import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "src/api/auth";

describe("getAPIKey", () => {
  test("should return null when no auth header is present", () => {
    const headers: IncomingHttpHeaders = {};
    expect(getAPIKey(headers)).toBe(null);
  });

  test("should return apikey", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey 12werfwe4",
    };
    expect(getAPIKey(headers)).toBe("12werfwe4");
  });

  test("should return null when authorization header is empty", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "",
    };
    expect(getAPIKey(headers)).toBe(null);
  });

  test("should return null when auth header doesn't start with 'ApiKey'", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "poopKey 1232423",
    };
    expect(getAPIKey(headers)).toBe(null);
  });

  test("should return null when auth header is ApiKey without a value", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey",
    };
    expect(getAPIKey(headers)).toBe(null);
  });
});
