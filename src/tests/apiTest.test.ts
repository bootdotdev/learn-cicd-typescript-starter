import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("apiKey is defined", () => {
    expect(getAPIKey).toBeDefined();
  });
});
