import { describe, it, expect } from "vitest";
import type { IncomingHttpHeaders } from "http";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  it("returns null when authorization header is missing", () => {
    const headers: IncomingHttpHeaders = {};

    expect(getAPIKey(headers)).toBeNull();
  });

  it("returns null when authorization header is undefined", () => {
    const headers: IncomingHttpHeaders = {
      authorization: undefined,
    };

    expect(getAPIKey(headers)).toBeNull();
  });
 
 
});