import http from "k6/http"
import { check } from 'k6'

export default function(){
    const request1 = {
        method : "POST",
        url:"https://reqres.in/api/users",
        payload: {
            "name": "morpheus",
            "job": "leader"},
        params: {
            headers: {
                "Content-Type": "application/json"
            }
        }
    }
    const request2 = {
        method: "POST",
        url: "https://reqres.in/api/login",
        payload: JSON.stringify({
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"}),
        params : {
            headers: {
                "Content-Type": "application/json",
                "Content-Length": "<calculated when request is sent>",
                "Host": "<calculated when request is sent>",
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate, br"

            }
        }
    }

    const responses = http.batch([request1,request2])
    check(responses[0], {
        
        'create user status was 201': (res) => res.status === 201,
    });
    check(responses[1], {
        'login status was 400': (res) => res.status === 400,
    });
    console.log(responses[1])
}