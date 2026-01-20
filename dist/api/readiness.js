import { respondWithJSON } from "./json.js";
export function handlerReadiness(req, res) {
    respondWithJSON(res, 200, { status: "ok" });
}
