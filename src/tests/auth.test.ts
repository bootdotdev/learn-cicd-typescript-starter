/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, expect, test } from "vitest";
import { something } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns API key when header is valid", () => {
    const headers = {
      authorization: "ApiKey test123",
    };

    const key = getAPIKey(headers as any);
    expect(key).toBe("test123");
  });

  test("returns undefined when header missing", () => {
    const headers = {};

    const key = getAPIKey(headers as any);
    expect(key).toBeNull();
  });
});
