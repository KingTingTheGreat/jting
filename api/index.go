package handler

import (
	"net/http"

	jting_handler "github.com/kingtingthegreat/jting-resume/handler"
)

func ResumeHandler(w http.ResponseWriter, r *http.Request) {
	jting_handler.Handler(w, r)
}
