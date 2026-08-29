import { getAPIKey } from "../api/auth.js";
import { expect, test } from "vitest";

test("no auth header", () => {
  const headers = {};
  expect(getAPIKey(headers)).toBe(null);
});

test("wrong prefix", () => {
  const headers = { authorization: "Bearer sometoken" };
  expect(getAPIKey(headers)).toBe(null);
});

test("valid api key", () => {
  const headers = { authorization: "ApiKey myapikey123" };
  expect(getAPIKey(headers)).toBe("myapikey123");
});

test("missing key after ApiKey", () => {
  const headers = { authorization: "ApiKey" };
  expect(getAPIKey(headers)).toBe(null);
});

//
