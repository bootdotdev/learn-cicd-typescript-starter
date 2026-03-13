import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("should exist", () => {
    expect(getAPIKey).toBeDefined();
  });
});
