// src/api/auth.ts


export function getAPIKey(req: any): string | null {
  const authHeader = req.headers?.authorization;
  if (!authHeader) return null;

  const [scheme, token] = authHeader.split(" ");
  if (scheme !== "Bearer") return null;

  return token || null;
}