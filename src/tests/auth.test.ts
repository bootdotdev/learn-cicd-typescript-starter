import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";
import { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  test("returns API key when valid header is provided", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey test123",
    };

    const key = getAPIKey(headers);

    expect(key).toBe("test123");
  });

  test("returns null when authorization header missing", () => {
    const headers: IncomingHttpHeaders = {};

    const key = getAPIKey(headers);

    expect(key).toBeNull();
  });

  test("returns null when header format is invalid", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Bearer test123",
    };

    const key = getAPIKey(headers);

    expect(key).toBeNull();
  });
});
