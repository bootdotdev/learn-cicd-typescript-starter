// ts
import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns key when header present", () => {
    const key = getAPIKey({ headers: { authorization: "Bearer abc123" } } as any);
    expect(key).toBe("abc123");
  });

  test("throws or returns null when header missing", () => {
    expect(() => getAPIKey({ headers: {} } as any)).toThrow();
  });
});