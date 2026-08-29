import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("should return the API key when the header is valid", () => {
    const headers = {
      authorization: "ApiKey 12345abcde",
    };
    const result = getAPIKey(headers);
    expect(result).toBe("12345abcde");
  });

  test("should return null if the authorization header is missing", () => {
    const headers = {};
    const result = getAPIKey(headers);
    expect(result).toBeNull(); // We check for null now!
  });

  test("should return null if the authorization header is malformed", () => {
    const headers = {
      authorization: "Bearer 12345",
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull(); // We check for null here too!
  });
});
