// auth.test.ts
import { describe, test, expect } from "vitest";
import { getAPIKey } from "./src/api/auth"; // المسار النسبي من مكان الملف

describe("getAPIKey function", () => {
  test("should return a string", () => {
    const key = getAPIKey();
    expect(typeof key).toBe("string");
  });

  test("should return the correct API key", () => {
    const key = getAPIKey();
    expect(key).toBe("my-secret-api-key");
  });
});
