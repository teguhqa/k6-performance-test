import http from "k6/http"

import { Trend } from 'k6/metrics';

export const options = {
    summaryTimeUnit: 'ms'
}

const myTrend = new Trend("TEGUH")

export default function () {
    const res = http.get("https://reqres.in/api/users/2")
    myTrend.add(0)
    myTrend.add(50)
    myTrend.add(50)
    myTrend.add(50)

    console.log("Result "+myTrend.name )

}