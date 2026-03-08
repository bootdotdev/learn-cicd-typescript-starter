import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

// نمرر authorization بالشكل المتوقع
const headers = { authorization: "ApiKey my-api-key" };

describe("getAPIKey", () => {
  test("should return the authorization string", () => {
    const key = getAPIKey(headers);
    expect(key).toBe("my-api-key"); // الآن يجب أن ينجح
  });

  test("should not be empty", () => {
    const key = getAPIKey(headers);
    expect(key).not.toBe("");
  });

  test("should return null if no authorization", () => {
    const key = getAPIKey({}); // بدون authorization
    expect(key).toBeNull();
  });

  test("should return null if authorization format is wrong", () => {
    const key = getAPIKey({ authorization: "Bearer something" });
    expect(key).toBeNull();
  });
});
