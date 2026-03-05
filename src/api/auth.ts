import { IncomingHttpHeaders } from "http";

export function getAPIKey(headers: IncomingHttpHeaders | undefined): string {
  
  const authHeader = headers?.authorization;

  
  return typeof authHeader === "string" ? authHeader : "";
}
