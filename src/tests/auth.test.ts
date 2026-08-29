/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns null when authorization header is missing", () => {
    expect(getAPIKey({} as any)).toBeNull();
  });

  test("returns null when auth scheme is not ApiKey", () => {
    expect(
      getAPIKey({
        authorization: "Bearer abc123",
      } as any),
    ).toBeNull();
  });

  test("returns null when ApiKey value is missing", () => {
    expect(
      getAPIKey({
        authorization: "ApiKey",
      } as any),
    ).toBeNull();
  });

  test("returns API key when header is valid", () => {
    expect(
      getAPIKey({
        authorization: "ApiKey abc123",
      } as any),
    ).toBe("abc123");
  });
});
