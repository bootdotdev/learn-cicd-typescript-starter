package auth

import (
	"net/http"
	"strings"
)

// GetAPIKey extracts the API key from the Authorization header.
func GetAPIKey(headers http.Header) string {
	authHeader := headers.Get("Authorization")
	if authHeader == "" {
		return ""
	}

	parts := strings.SplitN(authHeader, " ", 2)
	if len(parts) < 2 || parts[0] != "ApiKey" {
		return ""
	}

	return parts[1]
}
