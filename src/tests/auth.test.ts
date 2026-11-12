import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("should return the API key if it exists in authorization header", () => {
    const mockHeaders = {
      authorization: "ApiKey test-api-key-123",
    };
    
    expect(getAPIKey(mockHeaders)).toBe("test-api-key-123");
  });

  test("should return null if the API key is missing", () => {
    const mockHeaders = {};
    
    expect(getAPIKey(mockHeaders)).toBeNull();
  });
  
  test("should return null if the authorization header format is incorrect", () => {
    const mockHeaders = {
      authorization: "Bearer test-api-key-123",
    };
    
    expect(getAPIKey(mockHeaders)).toBeNull();
  });
});
