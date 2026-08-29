// ts
import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns key when ApiKey header present", () => {
    const key = getAPIKey({ authorization: "ApiKey abc123" } as {
      authorization?: string;
    });
    expect(key).toBe("abc123");
  });

  test("returns null when header missing", () => {
    const key = getAPIKey({} as { authorization?: string });
    expect(key).toBeNull();
  });

  test("returns null for non-ApiKey scheme", () => {
    const key = getAPIKey({ authorization: "Bearer abc123" } as {
      authorization?: string;
    });
    expect(key).toBeNull();
  });
});
