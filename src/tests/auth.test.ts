import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns null if no authorization header", () => {
    const result = getAPIKey({});
    expect(result).toBeNull();
  });

  test("returns API key if authorization header exists", () => {
    const headers = {
      authorization: "ApiKey my-secret-key",
    };

    const result = getAPIKey(headers);
    expect(result).toBe("my-secret-key");
  });
});
