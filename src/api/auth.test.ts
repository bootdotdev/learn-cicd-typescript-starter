import { describe, expect, test } from "vitest";
import { getAPIKey } from "./auth.js";

describe("getAPIKey", () => {
  test("returns null when authorization header is missing", () => {
    const headers = {};

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization header is malformed", () => {
    const headers = {
      authorization: "Bearer my-secret-key",
    };

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when api key is missing", () => {
    const headers = {
      authorization: "ApiKey",
    };

    expect(getAPIKey(headers)).toBeNull();
  });
});