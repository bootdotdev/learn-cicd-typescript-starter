// src/tests/auth.test.ts
import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {

  test("should return a non-empty string when authorization header is present", () => {
    const headers = {
      authorization: "Bearer 12345abcde"
    };

    const key = getAPIKey(headers);
    expect(key).toBeDefined();
    expect(typeof key).toBe("string");
    expect(key.length).toBeGreaterThan(0);
    expect(key).toBe("12345abcde");
  });

  test("should return null when authorization header is missing", () => {
    const headers = {}; // no authorization key
    const key = getAPIKey(headers);
    expect(key).toBeNull();
  });

  test("should return null when headers object is undefined", () => {
    const key = getAPIKey(undefined as any);
    expect(key).toBeNull();
  });

});
