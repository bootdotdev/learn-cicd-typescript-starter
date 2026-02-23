import { describe, expect, test } from "vitest";
import { getAPIKey } from "src/api/auth";

describe("getAPIKey", () => {
  test("empty key", () => {
    expect(getAPIKey({ authorization: "" })).toBeNull();
  });

  test("invalid key", () => {
    expect(getAPIKey({ authorization: "api-key 1123" })).toBeNull();
  });

  test("valid key", () => {
    expect(getAPIKey({ authorization: "ApiKey abc-123" })).toBe("abc-123");
  });
});
