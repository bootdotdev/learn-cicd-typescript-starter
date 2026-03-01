// src/api/auth.ts
import { IncomingHttpHeaders } from "http";

export function getAPIKey(headers: IncomingHttpHeaders): string | null {
  const authHeader = headers?.authorization;
  if (!authHeader) {
    return null;
  }
  return authHeader.replace("Bearer ", "");
}
