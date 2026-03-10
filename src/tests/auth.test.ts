import { describe, test, expect } from "vitest";
import { getAPIKey } from "src/api/auth.js";

describe("getAPIKey", () => {
  test("returns API key when Authorization header exists", () => {
    const headers = {
      authorization: "12345",
    };

    const result = getAPIKey(headers);

    expect(result).toBe("12345");
  });

  test("throws error when Authorization header is missing", () => {
    const headers = {};

    expect(() => getAPIKey(headers)).toThrow();
  });
});