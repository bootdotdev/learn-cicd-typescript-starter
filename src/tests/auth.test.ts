import { describe, test, expect } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns null if no authorization header", () => {
    const headers = {};
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("returns null if authorization header is malformed", () => {
    const headers = {
      authorization: "BadFormatKey",
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("returns null if authorization prefix is not ApiKey", () => {
    const headers = {
      authorization: "Bearer 12345",
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("returns API key when header is valid", () => {
    const headers = {
      authorization: "ApiKey my-secret-key",
    };
    const result = getAPIKey(headers);
    expect(result).toBe("my-secret-key");
  });

  test("returns null if ApiKey is provided without key value", () => {
    const headers = {
      authorization: "ApiKey",
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});
