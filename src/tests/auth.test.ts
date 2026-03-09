import { describe, test, expect } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns api key when provided", () => {
    const headers = {
      authorization: "Bearer test123",
    } as Record<string, unknown>;

    const key = getAPIKey(headers);

    expect(key).toBe("test123");
  });

  test("returns null if header missing", () => {
    const headers = {} as Record<string, unknown>;

    const key = getAPIKey(headers);

    expect(key).toBeNull();
  });
});
