import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

const http = {
  "content-length": "123",
  "content-type": "text/plain",
  connection: "keep-alive",
  host: "example.com",
  accept: "*",
  authorization: "ApiKey 1234567890abcdef",
};

describe("get apikey", () => {
  test("returns the api key from authorization header", () => {
    const apikey = getAPIKey(http);
    expect(apikey).toBe("1234567890abcdef");
  });

  test("returns null if the apikey is missing", () => {
    const apikey = getAPIKey({});
    expect(apikey).toBeNull();
  });
});
