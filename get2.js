import http from "k6/http"

export default function(){
const res = http.get('https://reqres.in/api/users?page=2')

console.log(typeof JSON.stringify(res.json()))
console.log(typeof res.json())
}