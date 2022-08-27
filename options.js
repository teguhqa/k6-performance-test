import http from "k6/http"

import { Trend } from 'k6/metrics';

// export const options = {
//     summaryTimeUnit: 's',
//     "stages": [
//         {
//         "duration": "10s",
//         "target": 1
//         },
//         {
//         "duration": "10s",
//         "target": 3
//         },
//         {
//         "duration": "10s",
//         "target": 2
//         }
//     ],
// }
const settingan = JSON.parse(open(".//settings//options.json"))
export const options = settingan

const myTrend = new Trend("kadal_time")

export default function () {
    const res = http.get("https://reqres.in/api/users/2")
    myTrend.add(res.timings.waiting)

}