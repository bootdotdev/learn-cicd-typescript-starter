import { describe, expect, test } from "vitest";
import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "./auth";

const headers = {
  authorization: "ApiKey 123456",
} as IncomingHttpHeaders;

describe("auth", () => {
  test("should return ApiKey", () => {
    const apiKey = getAPIKey(headers);
    expect(apiKey === "123456");
  });
});
