import http from "k6/http"

export default function(){
    const res = http.head("https://test.k6.io")
    console.log(JSON.stringify(res.headers));
}