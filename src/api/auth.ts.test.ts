import { describe, expect, test } from "vitest";
import { getAPIKey } from "./auth";

describe("getAPIKey", () => {
  test("returns null when no authorization header", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null when authorization header is not ApiKey", () => {
    expect(getAPIKey({ authorization: "Bearer token" })).toBeNull();
  });

  test("returns API key when valid ApiKey authorization", () => {
    expect(getAPIKey({ authorization: "ApiKey abc123" })).toBe("abc123");
  });
});
