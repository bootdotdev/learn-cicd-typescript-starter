export function getAPIKey(headers) {
    const authHeader = headers["authorization"];
    if (!authHeader) {
        return null;
    }
    const splitAuth = authHeader.split(" ");
    if (splitAuth.length < 2 || splitAuth[0] !== "ApiKey") {
        return null;
    }
    return splitAuth[1];
}
