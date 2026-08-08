import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";
import { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  test("returns null if no authorization header", () => {
    const headers: IncomingHttpHeaders = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null if auth header is malformed", () => {
    const headers: IncomingHttpHeaders = { authorization: "Bearer my-token" };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns the API key if auth header is correctly formed", () => {
    const headers: IncomingHttpHeaders = { authorization: "ApiKey my-super-secret-key" };
    expect(getAPIKey(headers)).toBe("my-super-secret-key");
  });
});
