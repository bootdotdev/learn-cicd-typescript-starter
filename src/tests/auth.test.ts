import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns API key if authorization header exists", () => {
    const headers = {
      authorization: "ApiKey 123abc"
    };

    const result = getAPIKey(headers as any);
    expect(result).toBe("123ab");
  });

  test("returns null if authorization header is missing", () => {
    const headers = {};

    const result = getAPIKey(headers as any);
    expect(result).toBeNull();
  });
});
