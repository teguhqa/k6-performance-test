import http from 'k6/http';
import { check, sleep } from 'k6';
export const options = {
  summaryTimeUnit: 'ms',
  stages:[
    {duration: '10', target: 10},
    {duration: '10', target: 1000},
    {duration: '10', target: 50},
  ]
};

export default function () {

  

    const url = 'https://reqres.in/api/users';
    const payload = JSON.stringify({
      "name": "morpheus",
      "job": "leader"
  });
  
    const params = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    const res = http.post(url, payload, params);
    check(res, { 'status was 201': (r) => r.status == 201 });
    sleep(1);
  }