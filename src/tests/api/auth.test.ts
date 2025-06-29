import { describe, test, expect } from "vitest";
import { getAPIKey } from "../../api/auth";
const apiKey = "test-api-key";

describe("getAPIKey", () => {
  test("returns API key when valid header is provided", () => {
    const headers = { authorization: `ApiKey ${apiKey}` };
    const result = getAPIKey(headers);
    expect(result).toBe(apiKey);
  });

  test("returns null when no authorization header is provided", () => {
    const headers = {};
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("returns null when authorization header is invalid", () => {
    const headers = { authorization: "InvalidHeader" };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});
