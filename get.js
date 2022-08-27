import http from "k6/http"

import { Trend } from 'k6/metrics';

export const options = {
    summaryTimeUnit: 'ms'
}

const myTrend = new Trend("kadal_time")

export default function () {
    const res = http.get("https://reqres.in/api/users/2")
    myTrend.add(res.timings.waiting)

    console.log("Result "+myTrend.name )

    console.log("blocked : "+res.timings.blocked)
    console.log("connecting : "+res.timings.connecting)
    console.log("duration : "+res.timings.duration)
    console.log("receiving : "+res.timings.receiving)
    console.log("sending : "+res.timings.sending)
    console.log("tls : "+res.timings.tls_handshaking)
    console.log("waiting : "+res.timings.waiting)
}