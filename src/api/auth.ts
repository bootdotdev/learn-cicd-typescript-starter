import { IncomingHttpHeaders } from "http";

export function getAPIKey(headers: IncomingHttpHeaders): string | null {
  const authHeader = headers["authorization"];

if (!authHeader) {
  throw new Error("Authorization header missing");
}

  const splitAuth = authHeader.split(" ");
  if (splitAuth.length < 2 || splitAuth[0] !== "ApiKey") {
    return null;
  }

  return splitAuth[1];
}
