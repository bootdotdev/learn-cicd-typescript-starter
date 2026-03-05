import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey function", () => {
  const fakeHeaders = { authorization: "my-api-key" };

  test("should return a string", () => {
    const key = getAPIKey(fakeHeaders);
    expect(typeof key).toBe("string");
  });

  test("should not be empty", () => {
    const key = getAPIKey(fakeHeaders);
    expect(key.length).toBeGreaterThan(0);
  });

  test("should return empty string if authorization missing", () => {
    const key = getAPIKey({});
    expect(key).toBe("");
  });

  test("should return empty string if headers is undefined", () => {
    const key = getAPIKey(undefined);
    expect(key).toBe("");
  });
});
