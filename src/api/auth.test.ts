import { describe, expect, it } from "vitest";
import { getAPIKey } from "./auth";

describe("getAPIKey", () => {
  it("should return null when no authorization header is present", () => {
    const headers = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  it("should return null when authorization header does not start with 'ApiKey'", () => {
    const headers = {
      authorization: "Bearer token123",
    };
    expect(getAPIKey(headers)).toBeNull();
  });

  it("should return null when authorization header is malformed", () => {
    const headers = {
      authorization: "ApiKey",
    };
    expect(getAPIKey(headers)).toBeNull();
  });

  it("should return the API key when authorization header is valid", () => {
    const apiKey = "test-api-key";
    const headers = {
      authorization: `ApiKey ${apiKey}`,
    };
    expect(getAPIKey(headers)).toBe(apiKey);
  });
});
