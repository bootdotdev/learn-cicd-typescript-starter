import { describe, expect, test } from "vitest";
import { getAPIKey } from "../auth"
import { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
	test("returns null when auth header is missing", () => {
		const headers: IncomingHttpHeaders = {};
		const key = getAPIKey(headers);
		expect(key).toBeNull();
	});

	test("returns null on malformed authorization header", () => {
		const headers: IncomingHttpHeaders = {
			authorization: "FOO",
		};
		const key = getAPIKey(headers);
		expect(key).toBeNull();
	});

	test("returns null when authorization does not begin with 'ApiKey '", () => {
		const headers: IncomingHttpHeaders = {
			authorization: "Auth: ThisIsAnAuthKey!"
		}
		const key = getAPIKey(headers);
		expect(key).toBeNull();
	});

	test("returns the api key when authorization begins with 'ApiKey '", () => {
		const apiKey = "ThisIsAValidApiKey"
		const headers: IncomingHttpHeaders = {
			authorization: "ApiKey " + apiKey
		}
		const key = getAPIKey(headers);
		expect(key).toEqual(apiKey)
	});
});
