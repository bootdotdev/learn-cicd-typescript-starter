package main

import (
	"crypto/sha256"
	"fmt"
)

func hashWithSHA256(input string) string {
	hash := sha256.Sum256([]byte(input))
	return fmt.Sprintf("%x", hash)
}

func main() {
	data := "supersecret"
	fmt.Println("SHA-256:", hashWithSHA256(data))
}
