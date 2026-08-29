import { describe, it, expect } from "vitest";
import { getAPIKey } from "../auth";

describe("getAPIKey", () => {
  it("should return the API key when authorization header is properly formatted", () => {
    const headers = {
      authorization: "ApiKey abc123",
    };

    const result = getAPIKey(headers);

    expect(result).toBe("abc123");
  });

  it("should return null when authorization header is missing", () => {
    const headers = {};

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  it("should return null when authorization header is null", () => {
    const headers = {
      authorization: null,
    };

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  it("should return null when authorization header is undefined", () => {
    const headers = {
      authorization: undefined,
    };

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  it("should return null when authorization header does not start with 'ApiKey'", () => {
    const headers = {
      authorization: "Bearer abc123",
    };

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  it("should return null when authorization header has wrong format (no space)", () => {
    const headers = {
      authorization: "ApiKeyabc123",
    };

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  it("should return null when authorization header has only 'ApiKey' without key", () => {
    const headers = {
      authorization: "ApiKey",
    };

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  it("should return empty string when authorization header has only 'ApiKey' with space but no key", () => {
    const headers = {
      authorization: "ApiKey ",
    };

    const result = getAPIKey(headers);

    expect(result).toBe("");
  });

  it("should return only the first part after 'ApiKey' when there are multiple spaces", () => {
    const headers = {
      authorization: "ApiKey abc123 def456",
    };

    const result = getAPIKey(headers);

    expect(result).toBe("abc123");
  });

  it("should be case-sensitive for 'ApiKey' prefix", () => {
    const headers = {
      authorization: "apikey abc123",
    };

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  it("should be case-sensitive for 'ApiKey' prefix (uppercase)", () => {
    const headers = {
      authorization: "APIKEY abc123",
    };

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  it("should handle empty string as authorization value", () => {
    const headers = {
      authorization: "",
    };

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  it("should handle authorization header with extra whitespace", () => {
    const headers = {
      authorization: "ApiKey  abc123",
    };

    const result = getAPIKey(headers);

    expect(result).toBe("");
  });
});
