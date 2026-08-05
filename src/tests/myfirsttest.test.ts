import { expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

test("gets key from header", () => {
  expect(getAPIKey({ authorization: "ApiKey myKey" })).toBe("myKey");
});
