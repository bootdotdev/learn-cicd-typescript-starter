import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("should return the API key from a valid Authorization header", () => {
    const headers = {
      authorization: "ApiKey 12345", // Use lowercase to match your code
    };
    const result = getAPIKey(headers);
    expect(result).toBe("12345");
  });

  test("should return null if the Authorization header is missing", () => {
    const headers = {};
    const result = getAPIKey(headers);
    expect(result).toBeNull(); // Changed from toBeUndefined
  });

  test("should return null if the Authorization header is malformed", () => {
    const headers = {
      authorization: "Bearer 12345",
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull(); // Changed from toBeUndefined
  });

  test("should return null if the Authorization header has no key", () => {
    const headers = {
      authorization: "ApiKey", // Only one part
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull(); // Changed from toBeUndefined
  });
});
