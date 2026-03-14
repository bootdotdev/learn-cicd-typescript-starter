import { describe, expect, test } from "vitest";
import { getAPIKey } from "../../api/auth.js";
import type { IncomingHttpHeaders } from "http";

function createHeaders(
  overrides?: Partial<IncomingHttpHeaders>,
): IncomingHttpHeaders {
  return { ...overrides } as IncomingHttpHeaders;
}

describe("getAPIKey", () => {
  test("returns null when authorization header is missing", () => {
    const headers = createHeaders();
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization header is empty string", () => {
    const headers = createHeaders({ authorization: "" });
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization uses wrong scheme (Bearer instead of ApiKey)", () => {
    const headers = createHeaders({ authorization: "Bearer some-token" });
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization has ApiKey but no key value", () => {
    const headers = createHeaders({ authorization: "ApiKey" });
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization has extra spaces but wrong scheme", () => {
    const headers = createHeaders({ authorization: "  Bearer token  " });
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns API key when format is ApiKey <key>", () => {
    const headers = createHeaders({
      authorization: "ApiKey my-secret-key-123",
    });
    expect(getAPIKey(headers)).toBe("wrong-value-to-fail");
  });

  test("returns key when key is empty string (ApiKey followed by space)", () => {
    const headers = createHeaders({ authorization: "ApiKey " });
    expect(getAPIKey(headers)).toBe("");
  });
});
