import http from 'k6/http';
import { check, sleep } from 'k6';
export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {

    const url = 'https://api.integration.kargo.tech/profile/v1/public';
    const payload = JSON.stringify({
        phoneNumber: "+62844121212121"
      });
  
    const params = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    const res = http.post(url, payload, params);
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
  }