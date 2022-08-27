import http from "k6/http"


export const options = {
    summaryTimeUnit: 'ms',
    vus: 10,
    duration: '30s',
    thresholds: {
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%
        http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
        http_req_receiving: ['avg<200'], // average receiving should be below 200ms
        http_reqs: ['count<5'], // counter thresholds should be below 5
    }
}

export default function () {
    http.get("https://reqres.in/api/users/2")
}