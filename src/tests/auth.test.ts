import { describe, expect, test } from "vitest";
import { getAPIKey } from "../../src/api/auth.js";

describe("getAPIKey", () => {
  test("should return the API key when Authorization header is valid", () => {
    const headers = {
      authorization: "ApiKey correct-key-123"
    };
    expect(getAPIKey(headers)).toBe("correct-key-123");
  });

 test("should return null if no Authorization header is present", () => {
  const headers = {};
  expect(getAPIKey(headers)).toBeNull();
});
test("should return null if Authorization header is malformed", () => {
  const headers = {
    authorization: "WrongPrefix some-key"
  };
  expect(getAPIKey(headers)).toBeNull();
});
});