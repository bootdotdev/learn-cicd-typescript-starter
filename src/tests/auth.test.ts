import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("should return null if no Authorization header is present", () => {
    const headers = {};
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("should return null if the Authorization header is malformed", () => {
    const headers = { authorization: "ApiKey" };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("should return the API key when the header is valid", () => {
    const headers = { authorization: "ApiKey your-secret-key" };
    const result = getAPIKey(headers);
    expect(result).toBe("your-secret-key");
  });
});
