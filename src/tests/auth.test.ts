import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";
import { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  test("returns api key when header exists", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey test-key-123",
    };

    const result = getAPIKey(headers);
    expect(result).toBe("test-key-123");
  });

  test("returns null when header missing", () => {
    const headers: IncomingHttpHeaders = {};

    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("returns null when prefix is wrong", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Bearer test-key-123",
    };

    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("returns null when malformed header", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey",
    };

    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});
