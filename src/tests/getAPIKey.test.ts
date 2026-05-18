import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("APIKey", () => {
  test("No Authorization in header is returned null", () => {
    const result = getAPIKey({ "content-type": "json" });
    expect(result).toBeNull();
  });

  test("Authorization Header is malformed", () => {
    let result = getAPIKey({ authorization: "key" });
    expect(result).toBeNull();
    result = getAPIKey({ authorization: "Key: keyValue" });
    expect(result).toBeNull();
  });

  test("Authorization is retrieved from header when properly formed", () => {
    const result = getAPIKey({ authorization: "ApiKey validKey" });
    expect(result).toEqual("validKeyX");
  });
});
