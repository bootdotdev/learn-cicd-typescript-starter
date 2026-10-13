import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "../api/auth.js";
import { describe, expect, it } from "vitest";

describe("getAPIKey tests", () => {
  it("should return parsed key on valid authorization header", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey TestKey",
    };

    const apiKey = getAPIKey(headers);
    expect(apiKey).toBeTypeOf("string");
    expect(apiKey?.length).toBeGreaterThan(0);
  });

  it("should return null on missing authorization header", () => {
    const headers: IncomingHttpHeaders = {};

    const apiKey = getAPIKey(headers);
    expect(apiKey).toBeNull();
  });

  it("should return null on bad api key name", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "BadKeyName TestKey",
    };

    const apiKey = getAPIKey(headers);
    expect(apiKey).toBeNull();
  });

  it("should return null on missing api key value", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey",
    };

    const apiKey = getAPIKey(headers);
    expect(apiKey).toBeNull();
  });
});
