import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns null when no authorization header is present", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null when authorization header is empty string", () => {
    expect(getAPIKey({ authorization: "" })).toBeNull();
  });

  test("returns null when scheme is not ApiKey", () => {
    expect(getAPIKey({ authorization: "Bearer sometoken" })).toBeNull();
  });

  test("returns null when authorization header has no key after scheme", () => {
    expect(getAPIKey({ authorization: "ApiKey" })).toBeNull();
  });

  test("returns the API key when header is well-formed", () => {
    expect(getAPIKey({ authorization: "ApiKey my-secret-key" })).toBe(
      "my-secret-key"
    );
  });

  test("scheme check is case-sensitive", () => {
    expect(getAPIKey({ authorization: "apikey my-secret-key" })).toBeNull();
  });
});
