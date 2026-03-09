import { describe, expect, test } from "vitest";
import type { IncomingHttpHeaders } from "http";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns null when authorization header is missing", () => {
    const headers: IncomingHttpHeaders = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization header is empty", () => {
    const headers: IncomingHttpHeaders = { authorization: "" };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when scheme is not ApiKey", () => {
    const headers: IncomingHttpHeaders = { authorization: "key 125555" };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when API key value is missing", () => {
    const headers: IncomingHttpHeaders = { authorization: "ApiKey" };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns API key when format is valid", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey myapikey123456",
    };
    expect(getAPIKey(headers)).toBe("myapikey123456");
  });
});
