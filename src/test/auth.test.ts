import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns the api key from a valid header", () => {
    const headers = { authorization: "ApiKey my-key" };
    expect(getAPIKey(headers)).toBe("my-key");
  });

  test("returns null for missing header", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null for wrong scheme", () => {
    const headers = { authorization: "Bearer token" };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when key is missing after scheme", () => {
    const headers = { authorization: "ApiKey" };
    expect(getAPIKey(headers)).toBeNull();
  });
});
