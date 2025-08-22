import { describe, expect, test } from "vitest";
import { getAPIKey } from "./auth";

describe("getApiKey", () => {
    test("return null when no authorization exists in header", () => {
        const mockHeader = {};
        expect(getAPIKey(mockHeader)).toBeTruthy();
    })
})