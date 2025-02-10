package main

import (
	"fmt"
	"net/http"

	"github.com/kingtingthegreat/jting-resume/handler"
)

func main() {
	http.HandleFunc("/", handler.Handler)
	http.HandleFunc("/styles.css", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "styles.css")
	})

	fmt.Println("http://localhost:8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		fmt.Println("server error:", err)
	}
}
