import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("should return the API key if it exists in authorization header", () => {
    const mockHeaders = {
      authorization: "ApiKey WRONG-KEY-FOR-TESTING",
    };
    
    expect(getAPIKey(mockHeaders)).toBe("WRONG-KEY-FOR-TESTING");
  });

  test("should return null if the API key is missing", () => {
    const mockHeaders = {};
    
    expect(getAPIKey(mockHeaders)).toBeNull();
  });
  
  test("should return null if the authorization header format is incorrect", () => {
    const mockHeaders = {
      authorization: "Bearer WRONG-KEY-FOR-TESTING",
    };
    
    expect(getAPIKey(mockHeaders)).toBeNull();
  });
});
