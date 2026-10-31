import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns the key from a valid ApiKey header", () => {
    const headers = { authorization: "ApiKey my-secret-key" };

    expect(getAPIKey(headers)).toBe("my-secret-key");
  });

  test("returns null when the authorization header is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null when the authorization header is empty", () => {
    expect(getAPIKey({ authorization: "" })).toBeNull();
  });

  test("returns null when the header has no key", () => {
    expect(getAPIKey({ authorization: "ApiKey" })).toBeNull();
  });

  test("returns null when the scheme is not ApiKey", () => {
    expect(getAPIKey({ authorization: "Bearer my-secret-key" })).toBeNull();
  });

  test("treats the scheme as case-sensitive", () => {
    expect(getAPIKey({ authorization: "apikey my-secret-key" })).toBeNull();
  });
});
