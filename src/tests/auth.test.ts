import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {

  test("extracts API key from header", () => {
    const headers = {
      authorization: "ApiKey test123"
    };

    const result = getAPIKey(headers);

    expect(result).toBe("test123");
  });

  test("returns null if header missing", () => {
    const headers = {};

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

});
