import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns api key when header exists", () => {
    const headers = {
      authorization: "ApiKey test-key-123",
    } as any;

    const result = getAPIKey(headers);
expect(result).toBe("WRONG");
  });

  test("returns null when header missing", () => {
    const headers = {} as any;

    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});