import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns the API key when a valid ApiKey header is provided", () => {
    const headers = { authorization: "ApiKey my-secret-key" };
    expect(getAPIKey(headers)).toBe("my-secret-key");
  });

  test("returns null when no authorization header is provided", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null when authorization header is undefined", () => {
    const headers = { authorization: undefined };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when the scheme is not ApiKey", () => {
    const headers = { authorization: "Bearer some-token" };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when the header has no space-separated value", () => {
    const headers = { authorization: "ApiKey" };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null for a completely empty authorization header", () => {
    const headers = { authorization: "" };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns the key when extra spaces produce additional segments", () => {
    const headers = { authorization: "ApiKey key1 extra" };
    expect(getAPIKey(headers)).toBe("key1");
  });
});
