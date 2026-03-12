import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns the key when Authorization header has valid ApiKey format", () => {
    const mockHeaders = {
      authorization: "ApiKey test-key-123",
    };
    const result = getAPIKey(mockHeaders as any);

    expect(result).toBe("test-key-123");
  });

  test("returns null when Authorization header has wrong prefix (e.g. Bearer)", () => {
    const mockHeaders = {
      authorization: "Bearer test-key-123",
    };
    const result = getAPIKey(mockHeaders as any);

    expect(result).toBeNull();
  });

  test("returns null when no Authorization header is present", () => {
    const mockHeaders = {};
    const result = getAPIKey(mockHeaders as any);

    expect(result).toBeNull();
  });

  test("returns null when Authorization header is malformed (no space)", () => {
    const mockHeaders = {
      authorization: "ApiKeytest-key-123", // missing space
    };
    const result = getAPIKey(mockHeaders as any);

    expect(result).toBeNull();
  });
});
