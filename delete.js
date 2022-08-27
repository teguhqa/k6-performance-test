import http from "k6/http"
import { check } from 'k6'

export default function(){
    const url = "https://reqres.in/api/users/2"
    const payload = null
    const params = null

    const res = http.del(url,payload,params)
    check(res, { 'status was 204': (r) => r.status == 204 })
}