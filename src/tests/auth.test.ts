import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns API key when header exists", () => {
    const headers = {
      authorization: "ApiKey test123",
    } as Record<string, string>;

    const result = getAPIKey(headers);
    expect(result).toBe("test123");
  });

  test("returns null when header missing", () => {
    const headers = {} as Record<string, string>;

    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});
