import { describe, expect, test } from "vitest";
import { getAPIKey } from "../src/api/auth";
import { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  test("returns API key when valid authorization header is provided", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey test-api-key-123",
    };
    
    expect(getAPIKey(headers)).toBe("wrong-key");
  });

  test("returns null when authorization header is missing", () => {
    const headers: IncomingHttpHeaders = {};
    
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization header is empty string", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "",
    };
    
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization header does not start with ApiKey", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Bearer some-token",
    };
    
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization header has only ApiKey without key value", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey",
    };
    
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization header has wrong scheme capitalization", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "apikey test-api-key-123",
    };
    
    expect(getAPIKey(headers)).toBeNull();
  });

  test("handles API key with spaces by returning only the first part after ApiKey", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey key-with-extra-parts extra",
    };
    
    expect(getAPIKey(headers)).toBe("key-with-extra-parts");
  });

  test("returns API key when it contains special characters", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey abc123-def456_ghi789",
    };
    
    expect(getAPIKey(headers)).toBe("abc123-def456_ghi789");
  });

  test("returns null when authorization header is undefined", () => {
    const headers: IncomingHttpHeaders = {
      authorization: undefined,
    };
    
    expect(getAPIKey(headers)).toBeNull();
  });
});
