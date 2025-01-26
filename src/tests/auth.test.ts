import { desc } from "drizzle-orm";
import { describe, expect, test} from "vitest";
import { getAPIKey } from "src/api/auth";


describe("getApiKey", () => {
    test("should return null if authorization header is missing", () => {
        const headers = {};
        expect(getAPIKey(headers)).toBeNull();
    });

    test("should return null if authorization header is empty", () => {
        const headers = { authorization: "" };
        expect(getAPIKey(headers)).toBeNull();
    });

    test("should return null if authoriaztion headers is malformed", () => {
        const headers = { authorization: "Bearer" }; // No API key after "Bearer"
        expect(getAPIKey(headers)).toBeNull()
    });

    test("should return API key if the authorization header is valid", () => {
        const apiKey = "123456";
        const headers = { authorization: `ApiKey ${apiKey}` };
        expect(getAPIKey(headers)).toBe(apiKey);
    });
});