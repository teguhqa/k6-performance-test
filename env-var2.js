import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    const res = http.get(`http://${__ENV.MY_HOSTNAME}/`);
    sleep(1);

    console.log(__ENV.MY_HOSTNAME)
}

//command to run this script in Windows PowerShell => $env:MY_HOSTNAME="test.k6.io"; k6 run env-var2.js
