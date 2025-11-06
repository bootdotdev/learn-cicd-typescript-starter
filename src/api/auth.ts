// ts
import { IncomingHttpHeaders } from "http";

export function getAPIKey(headers: IncomingHttpHeaders): string | null {
  const authHeader = headers["authorization"];
  if (!authHeader) return null;

  const [scheme, key] = authHeader.split(" ");
  if (scheme !== "ApiKey" || !key) return null;

  return key;
}