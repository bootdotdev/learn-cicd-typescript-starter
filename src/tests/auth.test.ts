import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns API key if authorization header exists", () => {
    const headers: Record<string, string> = {
      authorization: "ApiKey 123abc",
    };

    const result = getAPIKey(headers);
    expect(result).toBe("123abc");
  });

  test("returns null if authorization header is missing", () => {
    const headers: Record<string, string> = {};

    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});
