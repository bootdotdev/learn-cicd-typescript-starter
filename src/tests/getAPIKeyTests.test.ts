import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";
import { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {

  test("extracts API key from valid header", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey 123456"
    };

    const result = getAPIKey(headers);

    expect(result).toBe("123456");
  });

  test("throws error if Authorization header missing", () => {
    const headers = new Headers();

   const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  test("throws error if header format is invalid", () => {
    const headers = new Headers({
      Authorization: "InvalidHeader"
    });

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

});
