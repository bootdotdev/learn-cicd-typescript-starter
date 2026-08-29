import { respondWithError } from "./json.js";
import { getUser } from "../db/queries/users.js";
import { getAPIKey } from "./auth.js";
export function middlewareAuth(handler) {
    return async (req, res) => {
        try {
            const apiKey = getAPIKey(req.headers);
            if (!apiKey) {
                respondWithError(res, 401, "Couldn't find api key");
                return;
            }
            const user = await getUser(apiKey);
            if (!user) {
                respondWithError(res, 404, "Couldn't get user");
                return;
            }
            handler(req, res, user);
        }
        catch (err) {
            respondWithError(res, 500, "Couldn't authenticate user", err);
        }
    };
}
