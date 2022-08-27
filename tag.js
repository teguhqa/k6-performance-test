import http from "k6/http"
import { Trend } from "k6/metrics"
import { check } from "k6"

const tampungan = new Trend("customTrend")

export default function () {

    // add tag to request
    const res = http.get("https://reqres.in/api/users/2",{
        tags : {
            my_tag: "aa"
        }
    })

    // add tag to check
    check(res, {"Response Code 200": (r) => r.status === 200}, {my_tag: "bb"})

    // add tag to custom metric
    tampungan.add(res.timings.connecting, {my_tag: "cc"})
}