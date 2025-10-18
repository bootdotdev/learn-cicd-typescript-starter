import { describe, expect, test } from "vitest";
import { getAPIKey } from "src/api/auth";

describe("auth", () => {
    test("auth header exists", () => {
        expect(getAPIKey({
            authorization: "ApiKey abcdefo134u0fhosdfjoijij3"
        })).toBe("abcdefo134u0fhosdfjoijij3");
    });

    test("authorization empty", () => {
        expect(getAPIKey({ authorization: "" })).toBeNull()
    })

    test("no headers", () => {
        expect(getAPIKey({})).toBeNull()
    })

})
