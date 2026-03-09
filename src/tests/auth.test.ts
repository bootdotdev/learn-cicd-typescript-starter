import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

test("should return the API key if the authorization header is valid", () => {
  const headers = {
    authorization: "ApiKey some-token-value",
  };
  const result = getAPIKey(headers);
  expect(result).toBe("some-token-value");
});
