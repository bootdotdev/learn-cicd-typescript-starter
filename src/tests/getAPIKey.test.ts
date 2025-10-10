import { describe, it, expect } from "vitest";
import { getAPIKey } from "src/api/auth"; // adjust the path if needed

describe("getAPIKey", () => {
  it("returns null if there is no authorization header", () => {
    const headers = {};
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  it("returns null if the authorization header is not in 'ApiKey <key>' format", () => {
    const headers = { authorization: "Bearer 12345" };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  it("returns the API key when header is valid", () => {
    const headers = { authorization: "ApiKey my-secret-key" };
    const result = getAPIKey(headers);
    expect(result).toBe("my-secret-key");
  });

  it("returns null if header only has 'ApiKey' but no key", () => {
    const headers = { authorization: "ApiKey" };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});
