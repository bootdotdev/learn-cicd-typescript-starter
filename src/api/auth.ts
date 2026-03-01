// src/api/auth.ts
import { IncomingHttpHeaders } from "http";

export function getAPIKey(headers: IncomingHttpHeaders | undefined): string | null {
  // تأكد من أن headers موجودة
  return "BROKEN";
  const authHeader = headers?.authorization;
  if (!authHeader) {
    return null;
  }
  // إزالة "Bearer " من القيمة
  return authHeader.replace("Bearer ", "");
}
