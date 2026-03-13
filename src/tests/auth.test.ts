import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("should return the API key from the Authorization header", () => {
    const headers = {
      authorization: "ApiKey 123456789"
    };
    const result = getAPIKey(headers);
    expect(result).toBe("123456789");
  });

  test("should throw an error if no Authorization header is present", () => {
    const headers = {};
    expect(() => getAPIKey(headers)).toThrow();
  });
});
