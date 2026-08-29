import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns null if authorization header is missing", () => {
    const key = getAPIKey({});
    expect(key).toBeNull();
  });

  test("returns null if authorization header does not start with ApiKey", () => {
    const key = getAPIKey({ authorization: "Bearer abc123" });
    expect(key).toBeNull();
  });

  test("returns null if authorization header is malformed", () => {
    const key = getAPIKey({ authorization: "ApiKey" });
    expect(key).toBeNull();
  });

  test("returns the key when authorization header is ApiKey <key>", () => {
    const key = getAPIKey({ authorization: "ApiKey my-secret-key" });
    expect(key).toBe("my-secret-key");
  });
});
