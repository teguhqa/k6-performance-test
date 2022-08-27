import { check } from 'k6';
import http from 'k6/http';

export default function(){
    const res = http.get("https://httpbin.test.k6.io/cookies",{
        cookies: {
            my_cookie: "testCookie"
        }
    })

    check(res.json(),{
        "cookie value is correct" : (body) => body.cookies.my_cookie == "testCookie"
    })

    console.log(res.json().cookies.my_cookie)
}