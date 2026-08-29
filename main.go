package main

import (
	"fmt"
	"log"
	"net/http"
	"os"      // <-- import os
	"time"
)

func main() {
	m := http.NewServeMux()
	m.HandleFunc("/", handlePage)

	// Use PORT environment variable, fallback to 8010 if not set
	port := os.Getenv("PORT")
	if port == "" {
		port = "8010"
	}

	srv := http.Server{
		Handler:      m,
		Addr:         ":" + port,
		WriteTimeout: 30 * time.Second,
		ReadTimeout:  30 * time.Second,
	}

	fmt.Println("server started on", port)
	err := srv.ListenAndServe()
	log.Fatal(err)
}

func handlePage(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	w.WriteHeader(200)
	const page = `<html>
<head></head>
<body>
	<p> Hi Docker, I pushed a new version to Notely. </p>
</body>
</html>
`
	w.Write([]byte(page))
}
