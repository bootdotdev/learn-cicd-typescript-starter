import { describe, test, expect } from "vitest";
import { getAPIKey } from "../api/auth";
import type { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  test("extracts api key from header", () => {
    const headers = {
      authorization: "ApiKey 12345",
    };

    const key = getAPIKey(headers as IncomingHttpHeaders);
    expect(key).toBe("12345");
  });

  test("throws error if header missing", () => {
    const headers = {};

    expect(() => getAPIKey(headers as IncomingHttpHeaders)).toThrow();
  });
});
