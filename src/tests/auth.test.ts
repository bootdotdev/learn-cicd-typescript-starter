import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns API key when header exists", () => {
    const headers = {
      authorization: "ApiKey test123",
    };

    const result = getAPIKey(headers as any);
    expect(result).toBe("test123");
  });

  test("returns null when header missing", () => {
    const headers = {};

    const result = getAPIKey(headers as any);
    expect(result).toBeNull();
  });
});