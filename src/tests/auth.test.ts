import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "../api/auth";
import { describe, expect, it } from "vitest";

describe("auth", () => {
  it("should return null if there is no Authorization header", () => {
    const headers: IncomingHttpHeaders = {};
    const result = getAPIKey(headers);

    expect(result).toBe(null);
  });

  it("should return null if header has wrong format", () => {
    const headers1: IncomingHttpHeaders = {
      authorization: "ApiKey",
    };
    const headers2: IncomingHttpHeaders = {
      authorization: "13jj-c88d-87vx-98vv",
    };

    const result1 = getAPIKey(headers1);
    const result2 = getAPIKey(headers2);

    expect(result1).toBe(null);
    expect(result2).toBe(null);
  });

  it("shout return api key without ApiKey prefix", () => {
    const mockApiKey = "13jj-c88d-87vx-98vv";
    const headers: IncomingHttpHeaders = {
      authorization: `ApiKey ${mockApiKey}`,
    };
    const result = getAPIKey(headers);

    expect(result).toBe("test");
  });
});
