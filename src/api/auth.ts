export function getAPIKey(headers: Record<string, string>): string {
  const authHeader = headers["authorization"];
  if (!authHeader) {
    throw new Error("Wrong error message");
  }

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "ApiKey") {
    throw new Error("Malformed authorization header");
  }

  return parts[1];
}
