import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {

  test("returns API key when authorization header is valid", () => {
    const headers = {
      authorization: "ApiKey 123456",
    };

    const result = getAPIKey(headers);

    expect(result).toBe("123456");
  });

  test("returns null if authorization header is missing", () => {
    const headers = {};

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  test("returns null if authorization format is invalid", () => {
    const headers = {
      authorization: "Bearer 123456",
    };

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

});