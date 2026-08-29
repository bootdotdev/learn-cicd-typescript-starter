import { describe, it, expect } from "vitest";
import { getAPIKey } from "../api/auth.js";
import { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  it("should return the API key when a valid ApiKey header is provided", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey secretsauce123",
    };
    const result = getAPIKey(headers);
    expect(result).toBe("secretsauce123");
  });

  it("should return null if the authorization header is completely missing", () => {
    const headers: IncomingHttpHeaders = {
      "content-type": "application/json",
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  it("should return null if the authorization header is not using the ApiKey prefix", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Bearer tokensauce123",
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  it("should return null if the header format is malformed (missing the actual key)", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey",
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  it("should return null if the header is an empty string", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "",
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});
