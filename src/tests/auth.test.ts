import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns null when no authorization header", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null when authorization header is empty", () => {
    expect(getAPIKey({ authorization: "" })).toBeNull();
  });

  test("returns null when scheme is not ApiKey", () => {
    expect(getAPIKey({ authorization: "Bearer sometoken123" })).toBeNull();
  });

  test("returns null when only scheme is provided with no key", () => {
    expect(getAPIKey({ authorization: "ApiKey" })).toBeNull();
  });

  test("returns the API key when header is valid", () => {
    expect(getAPIKey({ authorization: "ApiKey mySecretKey123" })).toBe("mySecretKey123");
  });

  test("returns the API key with a different valid key", () => {
    expect(getAPIKey({ authorization: "ApiKey abc-def-ghi" })).toBe("abc-def-ghi");
  });

  test("returns null when scheme is lowercase apikey", () => {
    expect(getAPIKey({ authorization: "apikey mySecretKey123" })).toBeNull();
  });
});