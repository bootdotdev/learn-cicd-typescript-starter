import { describe, it, expect } from "vitest";
import { getAPIKey } from "../../api/auth";
import { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  it("returns null when no authorization header is present", () => {
    const headers: IncomingHttpHeaders = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  it("returns null when authorization header is undefined", () => {
    const headers: IncomingHttpHeaders = { authorization: undefined };
    expect(getAPIKey(headers)).toBeNull();
  });

  it("returns null when authorization header has no space", () => {
    const headers: IncomingHttpHeaders = { authorization: "ApiKey" };
    expect(getAPIKey(headers)).toBeNull();
  });

  it("returns null when authorization header uses wrong scheme", () => {
    const headers: IncomingHttpHeaders = { authorization: "Bearer my-token" };
    expect(getAPIKey(headers)).toBeNull();
  });

  it("returns null when authorization header scheme is lowercase", () => {
    const headers: IncomingHttpHeaders = { authorization: "apikey my-key" };
    expect(getAPIKey(headers)).toBeNull();
  });

  it("returns the API key when authorization header is valid", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey my-secret-key",
    };
    expect(getAPIKey(headers)).toBe("my-secret-key");
  });

  it("returns only the first key when extra parts are present", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey key-part-1 extra-stuff",
    };
    expect(getAPIKey(headers)).toBe("key-part-1");
  });

  it("handles empty string API key", () => {
    const headers: IncomingHttpHeaders = { authorization: "ApiKey " };
    expect(getAPIKey(headers)).toBe("");
  });
});

