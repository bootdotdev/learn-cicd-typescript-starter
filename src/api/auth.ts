import type { IncomingHttpHeaders } from "http";

export function getAPIKey(headers: IncomingHttpHeaders): string {
  const auth = headers.authorization;

  if (!auth) {
    throw new Error("Missing authorization header");
  }

  const parts = auth.split(" ");

  if (parts.length !== 2 || parts[0] !== "ApiKey") {
    throw new Error("Invalid authorization format");
  }

  return parts[1];
}
