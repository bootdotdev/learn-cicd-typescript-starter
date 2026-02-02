import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "src/api/auth";

describe("getApiKey", () => {
  test("should return the api key when authorization header is correct", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey abc-123",
    };

    expect(getAPIKey(headers)).toBe("abc-123");
  });

  test("should return null when authorization header is not present", () => {
    const headers = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("should return null when header doesn't have ApiKey", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Name Pokemon",
    };

    expect(getAPIKey(headers)).toBeNull();
  });

  test("should return null when authorization header is malformed", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey",
    };

    expect(getAPIKey(headers)).toBeNull();
  });
});
