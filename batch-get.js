import http from "k6/http"

export default function () {
    const url1 = "https://reqres.in/api/users/2"
    const url2 = "https://reqres.in/api/users?page=2"
    http.batch([url1,url2])
}