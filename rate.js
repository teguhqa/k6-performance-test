import http from "k6/http"

import { Rate } from 'k6/metrics';

export const options = {
    summaryTimeUnit: 'ms'
}

const myTrend = new Rate("TEGUH")

export default function () {
    const res = http.get("https://reqres.in/api/users/2")
    myTrend.add(1)
    myTrend.add(48)
    myTrend.add(50)
    myTrend.add(51)

    console.log("Result "+myTrend.name )

}