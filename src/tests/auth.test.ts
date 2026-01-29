import { getAPIKey } from "./../api/auth";
import { describe, expect, test } from "vitest";


describe("Api Key functions", () => {
  test("Get APIkey is valid", () => {
    expect(getAPIKey).not.toBeNull();
  });
});

