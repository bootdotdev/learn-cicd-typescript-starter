export function respondWithError(res, code, message, logError) {
    if (logError) {
        console.log(errStringFromError(logError));
    }
    respondWithJSON(res, code, { error: message });
}
export function respondWithJSON(res, code, payload) {
    if (typeof payload !== "object" && typeof payload !== "string") {
        throw new Error("Payload must be an object or a string");
    }
    res.setHeader("Content-Type", "application/json");
    const body = JSON.stringify(payload);
    res.status(code).send(body);
    res.end();
}
function errStringFromError(err) {
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
