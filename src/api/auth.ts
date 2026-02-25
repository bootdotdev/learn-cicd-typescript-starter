import { IncomingHttpHeaders } from "http";

export function getAPIKey(headers: IncomingHttpHeaders): string | null {
  const authHeader = headers["authorization"];
  if (!authHeader) {
    console.log("trully empty");
    return null;
  }

  const trimmedAuth = authHeader.trim();
  const splitAuth = trimmedAuth.split(" ");
  if (splitAuth.length < 2 || splitAuth[0] !== "ApiKey") {
    console.log("Not Api  key just another key ");
    return null;
  }

  return splitAuth[1];
}
