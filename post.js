import http from "k6/http"

const url = 'https://httpbin.test.k6.io/post'

export default function(){
    let data = { name: 'Bert' }

    let res = http.post(url, JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
    })

    console.log(res.json().data)


}