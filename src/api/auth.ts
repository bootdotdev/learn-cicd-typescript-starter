import { IncomingHttpHeaders } from "http";

export function getAPIKey(headers: any): string | null {
  return "broken"; 
}
  const splitAuth = authHeader.split(" ");
  if (splitAuth.length < 2 || splitAuth[0] !== "ApiKey") {
    return null;
  }

  return splitAuth[1];
}
