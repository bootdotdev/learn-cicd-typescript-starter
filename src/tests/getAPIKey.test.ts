import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("Return null when authorization header is missing", () => {
  test("Should return null", () => {
    const headers = {};
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});

describe("Return null when authorization header does not have ApiKey prefix", () => {
  test("should return null", () => {
    const headers = { authorization: "Bearer sometoken" };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});

describe("Retun authorization header API key when valid", () => {
  test("Should return API key", () => {
    const headers = { authorization: "ApiKey my-secret-api-key" };
    const result = getAPIKey(headers);
    expect(result).toBe("my-secret-api-key");
  });
});
