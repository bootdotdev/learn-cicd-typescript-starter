import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("should return the API key when Authorization header is valid", () => {
    const headers = {
      authorization: "ApiKey 12345",
    };
    expect(getAPIKey(headers)).toBe("12345");
  });

  test("should throw an error when Authorization header is missing", () => {
    const headers = {};
    expect(() => getAPIKey(headers)).toThrow("No authorization header found");
  });
});
