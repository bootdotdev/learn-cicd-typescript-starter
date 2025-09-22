package auth

import (
	"net/http"
	"testing"
)

func TestGetAPIKey_Valid(t *testing.T) {

	headers := http.Header{}
	headers.Set("Authorization", "ApiKey my-secret-key")

	got := GetAPIKey(headers)
	if got != "my-secret-key" {
		t.Errorf("expected %q, got %q", "my-secret-key", got)
	}
}

func TestGetAPIKey_InvalidPrefix(t *testing.T) {
	headers := http.Header{}
	headers.Set("Authorization", "Bearer something")

	got := GetAPIKey(headers)
	if got != "" {
		t.Errorf("expected empty string, got %q", got)
	}
}

func TestGetAPIKey_Missing(t *testing.T) {
	headers := http.Header{}

	got := GetAPIKey(headers)
	if got != "" {
		t.Errorf("expected empty string, got %q", got)
	}
}
