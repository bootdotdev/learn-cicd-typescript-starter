import { describe, test, expect } from "vitest";
import type { IncomingHttpHeaders } from "http";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns API key if exists", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey 123456",
    };

    const result = getAPIKey(headers);
    expect(result).toBe("123456");
  });

  test("returns null if no API key", () => {
    const headers: IncomingHttpHeaders = {};

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });
});
