export function getAPIKey(headers: Record<string, unknown>): string | null {
  const authHeader = headers?.authorization;
  if (typeof authHeader !== "string") return null;

  const [scheme, token] = authHeader.split(" ");
  if (scheme !== "Bearer") return null;

  return token || null;
}
