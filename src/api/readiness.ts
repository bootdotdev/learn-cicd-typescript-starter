import { Request, Response } from "express";
import { respondWithJSON } from "./json.js";

export function handlerReadiness(req: Request, res: Response) {
  respondWithJSON(res, 200, { status: "ok" });
}
