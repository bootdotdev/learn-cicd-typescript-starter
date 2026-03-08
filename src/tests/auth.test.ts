// src/tests/auth.test.ts
import { describe, test, expect } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns api key when provided", () => {
    const req = {
      headers: {
        authorization: "Bearer test123",
      },
    } as any;

    const key = getAPIKey(req);

    expect(key).toBe("test123");
  });

  test("returns null if header missing", () => {
    const req = {
      headers: {},
    } as any;

    const key = getAPIKey(req);

    expect(key).toBeNull();
  });
});
