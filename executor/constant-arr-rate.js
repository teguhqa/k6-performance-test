import http from 'k6/http';
import { sleep } from 'k6';
import exec from 'k6/execution';

export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'constant-arrival-rate',

      // Our test should last 30 seconds in total
      duration: '30s',

      // It should start 30 iterations per `timeUnit`. Note that iterations starting points
      // will be evenly spread across the `timeUnit` period.
      rate: 30,

      // It should start `rate` iterations per second
      timeUnit: '1s',

      // It should preallocate 2 VUs before starting the test
      preAllocatedVUs: 30,

      // It is allowed to spin up to 50 maximum VUs to sustain the defined
      // constant arrival rate.
      maxVUs: 50,
    },
  },
};

export default function () {
  http.get('https://test.k6.io/contacts.php');
  // We're injecting a processing pause for illustrative purposes only!
  // Each iteration will be ~515ms, therefore ~2 iterations/second per VU maximum throughput.
  sleep(0.5);
  console.log(`Iteration id:  ${exec.vu.iterationInInstance}`)
  //console.log(`Vus active:  ${exec.instance.vusActive}`)
}
