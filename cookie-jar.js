import http from 'k6/http';
import { check } from 'k6';

export default function(){
    const jar = http.cookieJar()
    jar.set("https://httpbin.test.k6.io/cookies",'my_cookie', 'testCookie')
    
    const cookies = {
        my_cookie: {
            value: 'testCookieBaru4',
            replace: true,
        },
    };

    console.log( jar.cookiesForURL("https://httpbin.test.k6.io/cookies"))

    const res = http.get("https://httpbin.test.k6.io/cookies", {cookies})
    
    // const res = http.get("https://httpbin.test.k6.io/cookies", {
    //     my_cookie: {
    //         value: "testCookieBaru",
    //         replace: true,
    //     }
    // })

    check(res.json(),{
        "cookie value is correct" : (body) => body.cookies.my_cookie == cookies.my_cookie.value
    })

    console.log(res.json().cookies.my_cookie)
}