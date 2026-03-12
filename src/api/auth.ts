import { IncomingHttpHeaders } from "http";

export function getAPIKey(headers: IncomingHttpHeaders): string {
  const authHeader = headers["authorization"];
  if (!authHeader) {
    throw new Error("Authorization header is missing");
  }

  return authHeader;
}
