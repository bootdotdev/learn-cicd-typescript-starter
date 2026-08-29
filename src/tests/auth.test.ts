import { describe, expect, test } from "vitest";
import { getAPIKey } from '../api/auth.js';

describe("getAPIKey", () => {
  test("returns null when no auth header", () => {
    const headers = new Headers();
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns key when valid Bearer token provided", () => {
    const headers = new Headers();
    headers.set("Authorization", "Bearer mykey123");
    expect(getAPIKey(headers)).toBe("mykey123");
  });

  test("returns null for malformed auth header", () => {
    const headers = new Headers();
    headers.set("Authorization", "InvalidHeader");
    expect(getAPIKey(headers)).toBeNull();
  });
});
