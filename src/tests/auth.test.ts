import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns null when no auth header", () => {
    const key = getAPIKey({});
    expect(key).toBeNull();
  });

  test("returns null when auth header is invalid", () => {
    const key = getAPIKey({ authorization: "Bearer token123" });
    expect(key).toBeNull();
  });

  test("returns API key when valid header", () => {
    const key = getAPIKey({ authorization: "ApiKey mykey123" });
    expect(key).toBe("mykey123");
  });
});
