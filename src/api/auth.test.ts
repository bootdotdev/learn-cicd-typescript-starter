import { describe, it, expect } from "vitest";
import { getAPIKey } from "./auth";
import type { IncomingHttpHeaders } from "http";

describe("person", () => {
  it("should return the API key when header is valid", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey 12345abc",
    };
    expect(getAPIKey(headers)).toBe("12345ab");
  });

  it("should return null when authorization header is missing", () => {
    const headers: IncomingHttpHeaders = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  it("should return null when authorization header does not start with ApiKey", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Bearer some-token",
    };
    expect(getAPIKey(headers)).toBeNull();
  });
});
