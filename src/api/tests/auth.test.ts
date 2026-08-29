import { describe, expect, test } from "vitest";
import { getAPIKey } from "../auth.js";

describe("getAPIKey", () => {
  test("returns the api key when a valid Authorization header is present", () => {
    const headers = {
      authorization: "ApiKey secretsauce123",
    };
    const result = getAPIKey(headers);
    expect(result).toBe("secretsauce123");
  });

  test("returns null when no Authorization header is present", () => {
    const headers = {};
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("returns null when the Authorization header is malformed", () => {
    const headers = {
      authorization: "Bearer wrongformat",
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});
