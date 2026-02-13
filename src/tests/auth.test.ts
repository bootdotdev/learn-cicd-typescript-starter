import { describe, it, expect } from "vitest";
import { getAPIKey } from "../api/auth";
import type { IncomingHttpHeaders } from "http";

// tiny helper to build headers without fighting types
const H = (h: Record<string, string | string[] | undefined>) =>
  h as unknown as IncomingHttpHeaders;

describe("getAPIKey", () => {
  it("returns null when there is no authorization header", () => {
    expect(getAPIKey(H({}))).toBeNull();
  });

  it("returns null when the scheme is not 'ApiKey'", () => {
    expect(getAPIKey(H({ authorization: "Bearer abc123" }))).toBeNull();
  });

  it("returns null when 'ApiKey' has no value", () => {
    expect(getAPIKey(H({ authorization: "ApiKey" }))).toBeNull();
  });

  it("returns the key when header is 'ApiKey <key>'", () => {
    expect(getAPIKey(H({ authorization: "ApiKey super-secret" }))).toBe(
      "super-secret",
    );
  });
});
