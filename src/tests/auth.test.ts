import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns null when no auth header", () => {
    const headers = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when wrong prefix", () => {
    const headers = { authorization: "Bearer abc123" };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when no key after ApiKey", () => {
    const headers = { authorization: "ApiKey" };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns api key when valid header", () => {
    const headers = { authorization: "ApiKey abc123" };
    expect(getAPIKey(headers)).toBe("abc123");
  });
});
