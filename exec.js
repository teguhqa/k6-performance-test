import http from "k6/http"
import exec from "k6/execution"

export const options = {
    summaryTimeUnit: 's',
    "stages": [
        {
        "duration": "1s",
        "target": 1
        },
        {
        "duration": "1s",
        "target": 3
        },
        {
        "duration": "1s",
        "target": 2
        }
    ],
}

export default function () {
    http.get("https://reqres.in/api/users/2")
    console.log(exec.test.options.scenarios.default.stages[1].target)
}