// src/tests/auth.test.ts
import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {

  test("returns the API key if authorization header exists", () => {
    const headers = { authorization: "Bearer 12345abcde" };
    const key = getAPIKey(headers);
    expect(key).toBe("12345abcde");
  });

  test("returns null if authorization header is missing", () => {
    const headers = {};
    const key = getAPIKey(headers);
    expect(key).toBeNull();
  });

  test("returns null if headers object is undefined", () => {
    const key = getAPIKey(undefined as any);
    expect(key).toBeNull();
  });

});
