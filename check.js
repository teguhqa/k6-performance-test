import http from "k6/http"
import { check } from "k6"

export const options = {
    summaryTimeUnit: 'ms'
}

export default function () {
    const res = http.get("https://reqres.in/api/users/2")
    check(res,{
        "Response statusnya 200": (az) => az.status == 200,
        "size body": (az) => az.body.length >= 1,
        "first name Janet": (az) => az.json().data.first_name === "Janet"
    })

}