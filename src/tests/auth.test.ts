import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns api key when header exists", () => {
    const headers = new Headers({
      Authorization: "ApiKey test-key-123",
    });

    const result = getAPIKey(headers);
    expect(result).toBe("test-key-123");
  });

  test("returns null when header missing", () => {
    const headers = new Headers();

    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});