import { describe, test, expect } from "vitest";
import { getAPIKey } from "../api/auth";
import { IncomingHttpHeaders } from "http";

describe("getAPIKey function with headers", () => {
  test("returns null if headers do not have authorization", () => {
    const headers: IncomingHttpHeaders = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns the API key if authorization header is correct", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey MY_SECRET_KEY",
    };
    expect(getAPIKey(headers)).toBe("MY_SECRET_KEY");
  });
});
