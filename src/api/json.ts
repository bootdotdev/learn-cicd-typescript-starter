import type { Response } from "express";

export function respondWithError(
  res: Response,
  code: number,
  message: string,
  logError?: unknown,
) {
  if (logError) {
    console.log(errStringFromError(logError));
  }

  respondWithJSON(res, code, { error: message });
}

export function respondWithJSON(res: Response, code: number, payload: unknown) {
  if (typeof payload !== "object" && typeof payload !== "string") {
    throw new Error("Payload must be an object or a string");
  }
  res.setHeader("Content-Type", "application/json");
  const body = JSON.stringify(payload);
  res.status(code).send(body);
  res.end();
}

function errStringFromError(err: unknown): string {
  if (typeof err === "string") {
    return err;
  }
  if (err instanceof Error) {
    return err.message;
  }
  if (err) {
    return String(err);
  }
  return "An unknown error occurred";
}
