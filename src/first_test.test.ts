import { describe, test, expect } from "vitest";
import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "./api/auth.js";

describe("Test getApiKey function", () => {
  test("First header test", () => {
    const header: IncomingHttpHeaders = {
      authorization: "ApiKey 2343456asdf",
    };

    const result = getAPIKey(header);
    expect(result).toEqual("2343456asdf");
  });

  test("Second header test", () => {
    const header: IncomingHttpHeaders = {
      authorization: "ApiKey",
    };
    const result = getAPIKey(header);
    expect(result).toBeNull();
  });
});
