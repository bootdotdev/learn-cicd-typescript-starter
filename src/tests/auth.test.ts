import { describe, it, expect } from "vitest";
import { getAPIKey } from "../api/auth.ts"; // adjust path as needed
import type { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  it("returns null when authorization header is missing", () => {
    const headers: IncomingHttpHeaders = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  it("returns null when authorization header is undefined", () => {
    const headers: IncomingHttpHeaders = { authorization: undefined };
    expect(getAPIKey(headers)).toBeNull();
  });

  it("returns null when authorization header is empty string", () => {
    const headers: IncomingHttpHeaders = { authorization: "" };
    expect(getAPIKey(headers)).toBeNull();
  });

  it("extracts API key from ApiKey token format", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey sk-abc123xyz",
    };
    expect(getAPIKey(headers)).toBe("sk-abc123xyz");
  });

  it("handles ApiKey token with extra spaces", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey sk-abc123xyz  ",
    };
    // Adjust expectation based on your implementation's trimming behavior
    expect(getAPIKey(headers)).toBe("sk-abc123xyz");
  });

  it("returns null for non-ApiKey authorization schemes", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Basic dXNlcjpwYXNz",
    };
    expect(getAPIKey(headers)).toBeNull();
  });

  it("handles case-insensitive header key access", () => {
    const headers: IncomingHttpHeaders = {
      Authorization: "ApiKey token123", // capital A
    };
    expect(getAPIKey(headers)).toBeNull();
  });

  it("preserves token with special characters", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey sk-test_123.abc+xyz=",
    };
    expect(getAPIKey(headers)).toBe("sk-test_123.abc+xyz=");
  });
});
