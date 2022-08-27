import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  const res = http.get('https://test.k6.io');
  sleep(1);
}

// Run in terminal => $env:K6_VUS=10 ; $env:K6_DURATION="10s" ; k6 run env-var4.js