import { describe, expect, it } from "vitest";
import { getAPIKey } from "./auth.js";

describe("getAPIKey", () => {
  it("returns null when authorization header is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  it("returns null when authorization scheme is not ApiKey", () => {
    expect(getAPIKey({ authorization: "Bearer some-token" })).toBeNull();
  });

  it("returns null when ApiKey scheme has no key", () => {
    expect(getAPIKey({ authorization: "ApiKey" })).toBeNull();
  });

  it("returns the api key from a valid ApiKey header", () => {
    expect(getAPIKey({ authorization: "ApiKey abc123" })).toBe("abc123");
  });
});
