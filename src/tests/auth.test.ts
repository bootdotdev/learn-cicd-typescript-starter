import { describe, it, expect } from "vitest";
import { getAPIKey } from "../api/auth.ts";

describe("getAPIKey", () => {
  it("returns null when authorization header is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  it("returns null when authorization header is empty", () => {
    expect(
      getAPIKey({
        authorization: "",
      }),
    ).toBeNull();
  });

  it("returns null when authorization scheme is not ApiKey", () => {
    expect(
      getAPIKey({
        authorization: "Bearer abc123",
      }),
    ).toBeNull();
  });

  it("returns null when ApiKey value is missing", () => {
    expect(
      getAPIKey({
        authorization: "ApiKey",
      }),
    ).toBeNull();
  });

  it("returns the API key when authorization header is valid", () => {
    expect(
      getAPIKey({
        authorization: "ApiKey abc123",
      }),
    ).toBe("abc123");
  });

  it("returns the first key after ApiKey when extra values exist", () => {
    expect(
      getAPIKey({
        authorization: "ApiKey abc123 extra",
      }),
    ).toBe("abc123");
  });
});
