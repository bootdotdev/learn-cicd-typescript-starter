import { IncomingHttpHeaders } from "http";

// This module provides a function to extract an API key from the request headers.
export function getAPIKey(headers: IncomingHttpHeaders): string | null {
  const authHeader = headers["authorization"];
  if (!authHeader) {
    return null;
  }

  const splitAuth = authHeader.split(" ");
  if (splitAuth.length < 2 || splitAuth[0] !== "ApiKey") {
    return null;
  }

  return splitAuth[1];
}
