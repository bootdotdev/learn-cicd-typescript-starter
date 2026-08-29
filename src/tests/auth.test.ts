import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("should return null if the authorization header is not present", () => {
    const headers = {};
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("should return null if the authorization header does not start with 'ApiKey'", () => {
    const headers = {
      authorization: "Bearer my-token",
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("should return null if the authorization header is malformed", () => {
    const headers = {
      authorization: "ApiKey",
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("should return the API key if the authorization header is valid", () => {
    const headers = {
      authorization: "ApiKey valid-api-key",
    };
    const result = getAPIKey(headers);
    expect(result).toBe("valid-api-key");
  });
});
