import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("testing auth", () => {
  test("with no auth header", () => {
    expect(getAPIKey({})).toBeNull();
  });
  test("with auth header but without apikey", () => {
    expect(getAPIKey({ authorization: "Something something" })).toBeDefined();
  });
  test("with auth header with apikey", () => {
    expect(getAPIKey({ authorization: "ApiKey somekey" })).toBeDefined();
  });
});
